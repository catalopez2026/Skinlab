// SKINLAB — conexión con la YouCam Skin Analysis API (Perfect Corp).
// Documentación: https://docs.perfectcorp.com/reference/ai_skin_analysis
// La clave se guarda en Netlify como variable YOUCAM_API_KEY y nunca llega al navegador.
import { env } from "./common.mjs";

const BASE = () => env("YOUCAM_BASE_URL", "https://yce-api-01.makeupar.com");

// 8 indicadores en calidad SD = 12 unidades por análisis exitoso (los que fallan no cobran).
export const ACTIONS = ["redness", "age_spot", "pore", "oiliness", "moisture", "acne", "texture", "wrinkle"];

// Nombre de YouCam -> clave interna de SKINLAB
const MAP = {
  redness: "redness", hd_redness: "redness",
  age_spot: "spots", hd_age_spot: "spots",
  pore: "pores", hd_pore: "pores",
  oiliness: "oil", hd_oiliness: "oil",
  moisture: "moisture", hd_moisture: "moisture",
  acne: "acne", hd_acne: "acne",
  texture: "texture", hd_texture: "texture",
  wrinkle: "lines", hd_wrinkle: "lines",
};

function headers(extra = {}) {
  return { Authorization: "Bearer " + env("YOUCAM_API_KEY"), "Content-Type": "application/json", ...extra };
}

async function call(method, path, body) {
  const r = await fetch(BASE() + path, { method, headers: headers(), body: body ? JSON.stringify(body) : undefined });
  const text = await r.text();
  let data = null;
  try { data = JSON.parse(text); } catch { /* respuesta no JSON */ }
  if (!r.ok) {
    const err = new Error("youcam_http_" + r.status);
    err.status = r.status;
    err.detail = data || text.slice(0, 300);
    throw err;
  }
  return data;
}

// 1) reserva el archivo, 2) sube la foto, 3) crea la tarea. Devuelve task_id.
export async function startAnalysis(jpegBytes) {
  const init = await call("POST", "/s2s/v2.0/file", {
    files: [{ content_type: "image/jpeg", file_name: "rostro.jpg", file_size: jpegBytes.byteLength }],
  });
  const f = init?.data?.files?.[0];
  const up = f?.requests?.[0];
  if (!f?.file_id || !up?.url) throw Object.assign(new Error("youcam_bad_upload_init"), { detail: init });

  const putHeaders = { ...(up.headers || {}) };
  if (!Object.keys(putHeaders).some((k) => k.toLowerCase() === "content-type")) putHeaders["Content-Type"] = "image/jpeg";
  const put = await fetch(up.url, { method: up.method || "PUT", headers: putHeaders, body: jpegBytes });
  if (!put.ok) throw Object.assign(new Error("youcam_upload_failed"), { status: put.status });

  const task = await call("POST", "/s2s/v2.0/task/skin-analysis", {
    src_file_id: f.file_id,
    dst_actions: ACTIONS,
    format: "json",
  });
  const taskId = task?.data?.task_id;
  if (!taskId) throw Object.assign(new Error("youcam_no_task"), { detail: task });
  return taskId;
}

// Consulta el estado. Devuelve { status: "running"|"success"|"error", scores?, error? }
export async function getAnalysis(taskId) {
  const res = await call("GET", "/s2s/v2.0/task/skin-analysis/" + encodeURIComponent(taskId));
  const d = res?.data || {};
  const status = String(d.task_status || d.status || "running").toLowerCase();
  if (status === "error" || status === "failed") {
    return { status: "error", error: d.error || d.error_message || "analysis_error" };
  }
  if (status !== "success") return { status: "running" };

  // Recorre la respuesta buscando objetos con un tipo y un puntaje (ui_score).
  const scores = {};
  let overall = null, skinAge = null;
  const walk = (node, keyName) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { node.forEach((n) => walk(n)); return; }
    const type = node.type || keyName;
    const score = node.ui_score ?? node.score;
    if (type && MAP[type] && typeof score === "number") scores[MAP[type]] = Math.round(score);
    if (keyName === "all" && typeof node.score === "number") overall = Math.round(node.score);
    if (typeof node.skin_age === "number") skinAge = node.skin_age;
    for (const [k, v] of Object.entries(node)) if (v && typeof v === "object") walk(v, k);
  };
  walk(d.results || d.result || d);
  if (!Object.keys(scores).length) return { status: "error", error: "no_scores" };
  return { status: "success", scores, overall, skinAge };
}
