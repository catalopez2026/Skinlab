// POST /api/analyze-status  { code, taskId }
// Consulta si el análisis terminó y devuelve los puntajes (0 a 100, más alto = mejor).
import { checkCode, codes, json, readBody } from "../lib/common.mjs";
import { getAnalysis } from "../lib/youcam.mjs";

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  const body = await readBody(req);
  const r = await checkCode(body.code);
  if (!r.ok) return r.res;
  const rec = r.rec;
  const taskId = String(body.taskId || "");
  if (!rec.tasks || !rec.tasks[taskId]) return json(404, { error: "unknown_task", message: "Ese análisis no corresponde a tu código." });

  try {
    const out = await getAnalysis(taskId);
    if (out.status === "success" && rec.tasks[taskId] === "pending") {
      rec.tasks[taskId] = "done";
      rec.analyses = (rec.analyses || 0) + 1;
      await codes().setJSON(r.code, rec);
    }
    if (out.status === "error" && rec.tasks[taskId] === "pending") {
      rec.tasks[taskId] = "error";
      await codes().setJSON(r.code, rec);
    }
    return json(200, out);
  } catch (e) {
    console.error("youcam status", e.message, e.status);
    return json(502, { status: "error", error: "ai_failed" });
  }
};

export const config = { path: "/api/analyze-status" };
