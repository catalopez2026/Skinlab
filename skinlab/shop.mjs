// GET /api/shop?slug=nombre-tienda  → datos públicos de la tienda para el test de piel.
import { json } from "../lib/common.mjs";
import { getShop, publicShop, saveShop, startIfNeeded } from "../lib/shops.mjs";

export default async (req) => {
  const slug = new URL(req.url).searchParams.get("slug") || "";
  const shop = await getShop(slug);
  if (!shop) return json(404, { error: "not_found", message: "No encontramos esta tienda." });
  if (startIfNeeded(shop)) await saveShop(shop);
  return json(200, publicShop(shop));
};

export const config = { path: "/api/shop" };
