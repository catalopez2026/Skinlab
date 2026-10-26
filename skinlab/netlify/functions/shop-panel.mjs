// POST /api/shop-panel  { code, action: "get" | "save", info?, products? }
// Panel de la tienda: ver su link, sus números y editar su catálogo.
import { json, readBody } from "../lib/common.mjs";
import { cleanPhone, cleanProduct, getStats, saveShop, shopByCode, startIfNeeded, summaryShop } from "../lib/shops.mjs";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const body = await readBody(req);
  const shop = await shopByCode(body.code);
  if (!shop) {
    await new Promise((r) => setTimeout(r, 600));
    return json(404, { error: "invalid_code", message: "Ese código no existe. Revisá que esté bien escrito." });
  }
  if (shop.revoked) return json(403, { error: "revoked", message: "Este código fue desactivado." });

  if (body.action === "save") {
    const info = body.info || {};
    if (typeof info.whatsapp === "string") shop.whatsapp = cleanPhone(info.whatsapp);
    if (typeof info.instagram === "string") shop.instagram = info.instagram.trim().slice(0, 60);
    if (typeof info.name === "string" && info.name.trim()) shop.name = info.name.trim().slice(0, 80);
    if (Array.isArray(body.products)) {
      shop.products = body.products.slice(0, 150).map(cleanProduct).filter((p) => p.name);
    }
    shop.updatedAt = new Date().toISOString();
  }
  const started = startIfNeeded(shop);
  if (started || body.action === "save") await saveShop(shop);

  const stats = await getStats(shop.slug);
  return json(200, { ok: true, shop: summaryShop(shop), products: shop.products || [], stats });
};

export const config = { path: "/api/shop-panel" };
