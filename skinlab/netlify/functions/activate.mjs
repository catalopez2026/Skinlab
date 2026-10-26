// POST /api/activate  { code }
// Primer uso: arranca los 7 días. Usos siguientes: devuelve cuántos días quedan.
import { checkCode, json, publicInfo, readBody } from "../lib/common.mjs";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const { code } = await readBody(req);
  const r = await checkCode(code, { activate: true });
  if (!r.ok) return r.res;
  return json(200, { ok: true, ...publicInfo(r.rec) });
};

export const config = { path: "/api/activate" };
