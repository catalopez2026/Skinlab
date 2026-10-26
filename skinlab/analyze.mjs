// POST /api/analyze  { code, image }   image = foto JPEG en base64 (sin el prefijo data:)
// Inicia el análisis con IA y devuelve { taskId }. La foto no se guarda en SKINLAB.
import { checkCode, codes, env, json, MAX_ANALYSES, readBody } from "../lib/common.mjs";
import { startAnalysis } from "../lib/youcam.mjs";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const body = await readBody(req);
  const r = await checkCode(body.code);
  if (!r.ok) return r.res;
  const rec = r.rec;

  if (!env("YOUCAM_API_KEY")) {
    return json(501, { error: "ai_not_configured", message: "El análisis con IA todavía no está conectado. Se usa el modo demostración." });
  }
  const max = rec.maxAnalyses || MAX_ANALYSES();
  if ((rec.analyses || 0) >= max) {
    return json(429, { error: "limit", message: "Llegaste al máximo de " + max + " análisis de la prueba." });
  }

  let bytes;
  try {
    const b64 = String(body.image || "").replace(/^data:image\/\w+;base64,/, "");
    bytes = Uint8Array.from(atob(b64), (ch) => ch.charCodeAt(0));
  } catch {
    return json(400, { error: "bad_image", message: "No se pudo leer la foto. Probá con otra." });
  }
  if (bytes.byteLength < 20000) return json(400, { error: "small_image", message: "La foto es muy chica. Tomala más cerca y con buena luz." });
  if (bytes.byteLength > 4500000) return json(413, { error: "big_image", message: "La foto es muy pesada." });

  try {
    const taskId = await startAnalysis(bytes);
    rec.tasks = rec.tasks || {};
    // Guardamos solo las últimas 50 tareas para no crecer sin límite.
    const keys = Object.keys(rec.tasks);
    if (keys.length > 50) delete rec.tasks[keys[0]];
    rec.tasks[taskId] = "pending";
    await codes().setJSON(r.code, rec);
    return json(200, { ok: true, taskId });
  } catch (e) {
    console.error("youcam start", e.message, e.status, JSON.stringify(e.detail || "").slice(0, 300));
    return json(502, { error: "ai_failed", message: "El servicio de análisis no respondió. Probá de nuevo en un minuto o usá el modo demostración." });
  }
};

export const config = { path: "/api/analyze" };
