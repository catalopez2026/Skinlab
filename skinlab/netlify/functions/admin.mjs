// POST /api/admin  { password, action, ... }
// Solo para vos: crear códigos de prueba, verlos, desactivarlos o extenderlos.
// La contraseña se configura en Netlify como variable ADMIN_PASSWORD.
import { codes, DAY_MS, env, json, MAX_ANALYSES, newCode, normCode, pretty, readBody, safeEqual, TRIAL_DAYS } from "../lib/common.mjs";
import { createShop, getShop, getStats, saveShop, shops, summaryShop } from "../lib/shops.mjs";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const body = await readBody(req);
  const pass = env("ADMIN_PASSWORD");
  if (!pass || pass.length < 8) return json(500, { error: "no_admin_password", message: "Falta configurar ADMIN_PASSWORD (mínimo 8 caracteres) en Netlify." });
  if (!safeEqual(body.password || "", pass)) {
    await new Promise((r) => setTimeout(r, 800));
    return json(401, { error: "bad_password", message: "Contraseña incorrecta." });
  }
  const store = codes();

  if (body.action === "list") {
    const { blobs } = await store.list();
    const items = [];
    for (const b of blobs) {
      const rec = await store.get(b.key, { type: "json" });
      if (rec) items.push(summary(rec));
    }
    items.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
    return json(200, { ok: true, items, aiEnabled: !!env("YOUCAM_API_KEY"), trialDays: TRIAL_DAYS(), maxAnalyses: MAX_ANALYSES() });
  }

  if (body.action === "create") {
    const name = String(body.name || "").trim().slice(0, 80);
    if (!name) return json(400, { error: "name", message: "Escribí el nombre de la profesional." });
    let code;
    for (let i = 0; i < 5; i++) { code = newCode(); if (!(await store.get(code))) break; }
    const rec = {
      code, name,
      contact: String(body.contact || "").trim().slice(0, 120),
      createdAt: new Date().toISOString(),
      days: Math.min(60, Math.max(1, Number(body.days) || TRIAL_DAYS())),
      maxAnalyses: Math.min(500, Math.max(1, Number(body.maxAnalyses) || MAX_ANALYSES())),
      activatedAt: null, expiresAt: null, revoked: false, analyses: 0, tasks: {},
    };
    await store.setJSON(code, rec);
    return json(200, { ok: true, item: summary(rec) });
  }

  // ----- tiendas -----
  if (body.action === "shop-list") {
    const { blobs } = await shops().list({ prefix: "shop/" });
    const items = [];
    for (const b of blobs) {
      const s = await shops().get(b.key, { type: "json" });
      if (s) items.push(summaryShop(s, await getStats(s.slug)));
    }
    items.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
    return json(200, { ok: true, items });
  }
  if (body.action === "shop-create") {
    const name = String(body.name || "").trim();
    if (!name) return json(400, { error: "name", message: "Escribí el nombre de la tienda." });
    const s = await createShop({ name, whatsapp: body.whatsapp, instagram: body.instagram, days: body.days });
    return json(200, { ok: true, item: summaryShop(s, { totals: {} }) });
  }
  if (["shop-revoke", "shop-restore", "shop-extend"].includes(body.action)) {
    const s = await getShop(String(body.slug || ""));
    if (!s) return json(404, { error: "not_found", message: "No encontré esa tienda." });
    if (body.action === "shop-revoke") s.revoked = true;
    if (body.action === "shop-restore") s.revoked = false;
    if (body.action === "shop-extend") {
      const add = Math.min(60, Math.max(1, Number(body.days) || 7));
      if (s.expiresAt) s.expiresAt = new Date(Math.max(Date.now(), Date.parse(s.expiresAt)) + add * DAY_MS).toISOString();
      else s.days = (s.days || TRIAL_DAYS()) + add;
    }
    await saveShop(s);
    return json(200, { ok: true, item: summaryShop(s, await getStats(s.slug)) });
  }

  const code = normCode(body.code);
  const rec = code ? await store.get(code, { type: "json" }) : null;
  if (!rec) return json(404, { error: "not_found", message: "No encontré ese código." });

  if (body.action === "revoke") rec.revoked = true;
  else if (body.action === "restore") rec.revoked = false;
  else if (body.action === "extend") {
    const add = Math.min(60, Math.max(1, Number(body.days) || 7));
    if (rec.expiresAt) {
      const base = Math.max(Date.now(), Date.parse(rec.expiresAt));
      rec.expiresAt = new Date(base + add * DAY_MS).toISOString();
    } else rec.days = (rec.days || TRIAL_DAYS()) + add;
  } else return json(400, { error: "action" });

  await store.setJSON(code, rec);
  return json(200, { ok: true, item: summary(rec) });
};

function summary(rec) {
  const now = Date.now();
  let status = "Sin activar";
  if (rec.revoked) status = "Desactivado";
  else if (rec.expiresAt && now > Date.parse(rec.expiresAt)) status = "Vencido";
  else if (rec.activatedAt) status = "Activo";
  return {
    code: rec.code, pretty: pretty(rec.code), name: rec.name, contact: rec.contact || "",
    createdAt: rec.createdAt, activatedAt: rec.activatedAt, expiresAt: rec.expiresAt, lastSeenAt: rec.lastSeenAt || null,
    days: rec.days, analyses: rec.analyses || 0, maxAnalyses: rec.maxAnalyses, status,
  };
}

export const config = { path: "/api/admin" };
