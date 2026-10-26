// SKINLAB para tiendas — datos de cada tienda, su catálogo y sus números.
import { getStore } from "@netlify/blobs";
import { DAY_MS, newCode, normCode, pretty, TRIAL_DAYS } from "./common.mjs";

export const CATEGORIES = ["limpiador", "aceite", "tonico", "serum", "contorno", "hidratante", "protector", "exfoliante", "mascarilla"];
export const CONCERNS = ["acne", "manchas", "rojeces", "poros", "lineas", "hidratacion", "luminosidad"];
export const SKINS = ["todas", "grasa", "mixta", "seca", "normal", "sensible"];

export function shops() {
  return getStore({ name: "skinlab-shops", consistency: "strong" });
}

export function slugify(name) {
  return String(name || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "tienda";
}

export async function getShop(slug) {
  if (!slug || !/^[a-z0-9-]{1,48}$/.test(slug)) return null;
  return shops().get("shop/" + slug, { type: "json" });
}

export async function saveShop(shop) {
  await shops().setJSON("shop/" + shop.slug, shop);
}

export async function shopByCode(raw) {
  const code = normCode(raw);
  if (!code) return null;
  const ref = await shops().get("code/" + code, { type: "json" });
  if (!ref) return null;
  return getShop(ref.slug);
}

export async function createShop({ name, whatsapp, instagram, days }) {
  const store = shops();
  let slug = slugify(name), i = 2;
  while (await store.get("shop/" + slug)) slug = slugify(name) + "-" + i++;
  let code;
  for (let k = 0; k < 6; k++) { code = newCode(); if (!(await store.get("code/" + code))) break; }
  const shop = {
    slug, code, name: String(name).trim().slice(0, 80),
    whatsapp: cleanPhone(whatsapp), instagram: String(instagram || "").trim().slice(0, 60),
    createdAt: new Date().toISOString(), days: Math.min(60, Math.max(1, Number(days) || TRIAL_DAYS())),
    activatedAt: null, expiresAt: null, revoked: false, products: [],
  };
  await store.setJSON("shop/" + slug, shop);
  await store.setJSON("code/" + code, { slug });
  return shop;
}

export function cleanPhone(p) {
  let d = String(p || "").replace(/\D/g, "");
  if (!d) return "";
  if (d.length === 10) d = "549" + d;            // 11 1234 5678 -> 5491112345678
  else if (d.length === 12 && d.startsWith("54") && d[2] !== "9") d = "549" + d.slice(2);
  return d.slice(0, 15);
}

// La prueba arranca con el primer uso (panel o test) y dura `days` días.
export function startIfNeeded(shop) {
  if (shop.activatedAt) return false;
  const now = Date.now();
  shop.activatedAt = new Date(now).toISOString();
  shop.expiresAt = new Date(now + (shop.days || TRIAL_DAYS()) * DAY_MS).toISOString();
  return true;
}

export function status(shop) {
  if (shop.revoked) return "Desactivada";
  if (!shop.activatedAt) return "Sin activar";
  if (Date.now() > Date.parse(shop.expiresAt)) return "Vencida";
  return "Activa";
}

export function daysLeft(shop) {
  if (!shop.expiresAt) return shop.days;
  return Math.max(0, Math.ceil((Date.parse(shop.expiresAt) - Date.now()) / DAY_MS));
}

// Limpia un producto que llega desde el panel.
export function cleanProduct(p, idx) {
  const arr = (v, allowed) => (Array.isArray(v) ? v : []).filter((x) => allowed.includes(x)).slice(0, allowed.length);
  const cat = CATEGORIES.includes(p.cat) ? p.cat : "serum";
  return {
    id: String(p.id || "p" + Date.now().toString(36) + idx).replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 24),
    name: String(p.name || "").trim().slice(0, 90),
    brand: String(p.brand || "").trim().slice(0, 50),
    price: String(p.price || "").trim().slice(0, 20),
    cat,
    concerns: arr(p.concerns, CONCERNS),
    skins: arr(p.skins, SKINS).length ? arr(p.skins, SKINS) : ["todas"],
    pregnancy: ["si", "no", "nose"].includes(p.pregnancy) ? p.pregnancy : "nose",
    tier: ["economica", "media", "alta"].includes(p.tier) ? p.tier : "media",
    tags: String(p.tags || "").trim().slice(0, 140),
    active: p.active !== false,
  };
}

// Lo que ve la clienta: sin código ni datos internos.
export function publicShop(shop) {
  return {
    slug: shop.slug, name: shop.name, whatsapp: shop.whatsapp, instagram: shop.instagram,
    available: status(shop) === "Activa" || status(shop) === "Sin activar",
    products: (shop.products || []).filter((p) => p.active && p.name)
      .map(({ id, name, brand, price, cat, concerns, skins, pregnancy, tier, tags }) => ({ id, name, brand, price, cat, concerns, skins, pregnancy, tier, tags })),
  };
}

// Métricas: un archivo aparte por tienda, con totales y por día.
export const EVENTS = ["view", "start", "complete", "whatsapp", "counter", "selfie"];
export async function addEvent(slug, type) {
  const store = shops();
  const key = "stats/" + slug;
  const st = (await store.get(key, { type: "json" })) || { totals: {}, days: {} };
  const day = new Date(Date.now() - 3 * 3600 * 1000).toISOString().slice(0, 10); // fecha de Argentina
  st.totals[type] = (st.totals[type] || 0) + 1;
  st.days[day] = st.days[day] || {};
  st.days[day][type] = (st.days[day][type] || 0) + 1;
  const keys = Object.keys(st.days).sort();
  while (keys.length > 60) delete st.days[keys.shift()];
  await store.setJSON(key, st);
}
export async function getStats(slug) {
  return (await shops().get("stats/" + slug, { type: "json" })) || { totals: {}, days: {} };
}

export function summaryShop(shop, stats) {
  return {
    slug: shop.slug, name: shop.name, code: shop.code, pretty: pretty(shop.code),
    whatsapp: shop.whatsapp, instagram: shop.instagram, createdAt: shop.createdAt,
    activatedAt: shop.activatedAt, expiresAt: shop.expiresAt, days: shop.days, daysLeft: daysLeft(shop),
    status: status(shop), products: (shop.products || []).length, totals: stats ? stats.totals : undefined,
  };
}
