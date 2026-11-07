// POST /api/shop-lead  { slug, lead }
// Guarda el nombre y el WhatsApp de una clienta que hizo el test y aceptó que la tienda la contacte.
import { json, readBody } from "../lib/common.mjs";
import { cleanLead, getShop, publicShop, saveLead } from "../lib/shops.mjs";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const body = await readBody(req);
  const shop = await getShop(String(body.slug || ""));
  if (!shop) return json(404, { error: "not_found" });
  if (!publicShop(shop).available) return json(403, { error: "off" });
  const lead = cleanLead(body.lead || {});
  if (!lead) return json(400, { error: "lead", message: "Faltan el nombre, el WhatsApp o la aceptación." });
  await saveLead(shop.slug, lead);
  return json(200, { ok: true });
};

export const config = { path: "/api/shop-lead" };
