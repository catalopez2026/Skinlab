// SKINLAB — utilidades compartidas por las funciones de servidor.
import { getStore } from "@netlify/blobs";

export const DAY_MS = 24 * 60 * 60 * 1000;

export function env(name, fallback = "") {
  const v = (globalThis.Netlify && Netlify.env && Netlify.env.get(name)) ?? process.env[name];
  return v === undefined || v === null || v === "" ? fallback : v;
}

export const TRIAL_DAYS = () => Number(env("TRIAL_DAYS", "7")) || 7;
export const MAX_ANALYSES = () => Number(env("MAX_ANALYSES", "30")) || 30;

export function codes() {
  return getStore({ name: "skinlab-codes", consistency: "strong" });
}

export function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

export function normCode(c) {
  return String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 16);
}

// Letras y números sin los que se confunden (0/O, 1/I/L).
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
export function newCode() {
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  let s = "";
  for (const b of bytes) s += ALPHABET[b % ALPHABET.length];
  return s.slice(0, 4) + s.slice(4); // 8 caracteres, se muestra como XXXX-XXXX
}

export function pretty(code) {
  return code.length === 8 ? code.slice(0, 4) + "-" + code.slice(4) : code;
}

// Revisa un código y devuelve { ok, rec } o { ok:false, res } con la respuesta de error lista.
export async function checkCode(rawCode, { activate = false } = {}) {
  const code = normCode(rawCode);
  if (!code) return { ok: false, res: json(400, { error: "missing_code", message: "Ingresá tu código de acceso." }) };
  const store = codes();
  const rec = await store.get(code, { type: "json" });
  if (!rec) return { ok: false, res: json(404, { error: "invalid_code", message: "Ese código no existe. Revisá que esté bien escrito." }) };
  if (rec.revoked) return { ok: false, res: json(403, { error: "revoked", message: "Este código fue desactivado. Escribile a quien te lo dio." }) };
  const now = Date.now();
  if (!rec.activatedAt) {
    if (!activate) return { ok: false, res: json(403, { error: "not_active", message: "Activá tu código desde la pantalla de inicio." }) };
    rec.activatedAt = new Date(now).toISOString();
    rec.expiresAt = new Date(now + (rec.days || TRIAL_DAYS()) * DAY_MS).toISOString();
  }
  if (now > Date.parse(rec.expiresAt)) {
    return { ok: false, res: json(403, { error: "expired", message: "Tu prueba de " + (rec.days || TRIAL_DAYS()) + " días terminó.", expiresAt: rec.expiresAt, name: rec.name }) };
  }
  rec.lastSeenAt = new Date(now).toISOString();
  await store.setJSON(code, rec);
  return { ok: true, rec, code };
}

export function publicInfo(rec) {
  const max = rec.maxAnalyses || MAX_ANALYSES();
  const msLeft = Date.parse(rec.expiresAt) - Date.now();
  return {
    name: rec.name || "",
    expiresAt: rec.expiresAt,
    daysLeft: Math.max(0, Math.ceil(msLeft / DAY_MS)),
    analysesUsed: rec.analyses || 0,
    analysesLeft: Math.max(0, max - (rec.analyses || 0)),
    aiEnabled: !!env("YOUCAM_API_KEY"),
  };
}

export async function readBody(req) {
  try { return await req.json(); } catch { return {}; }
}

// Comparación que no filtra por tiempo cuánto coincide la contraseña.
export function safeEqual(a, b) {
  const x = new TextEncoder().encode(String(a));
  const y = new TextEncoder().encode(String(b));
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] || 0) ^ (y[i] || 0);
  return diff === 0;
}
