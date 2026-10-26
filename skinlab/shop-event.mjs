// POST /api/shop-event  { slug, type }  → suma una visita, test completo, pedido, etc.
// No guarda nada de la clienta: solo cuenta.
import { json, readBody } from "../lib/common.mjs";
import { addEvent, EVENTS, getShop } from "../lib/shops.mjs";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const { slug, type } = await readBody(req);
  if (!EVENTS.includes(type)) return json(400, { error: "type" });
  const shop = await getShop(slug);
  if (!shop) return json(404, { error: "not_found" });
  await addEvent(shop.slug, type);
  return json(200, { ok: true });
};

export const config = { path: "/api/shop-event" };
