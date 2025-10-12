// ✅ ReactPress-friendly API helper — works both locally and on production

// Detect if we’re running locally or on WordPress domain
const hostname = window?.location?.hostname;
const isLocal =
  hostname === "localhost" ||
  hostname === "127.0.0.1" ||
  hostname.endsWith(".local");

const API_URL = isLocal
  ? "http://localhost:3000" // 🧩 Local API for testing
  : "https://api.nutrineuvo.fi"; // 🌐 Production API

console.log("🌐 API_URL loaded:", API_URL);

/**
 * 🔗 Universal API fetch helper
 * Always returns { ok, status, message?, data? }
 */
export async function api(endpoint, { method = "GET", body, token } = {}) {
  const url = `${API_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      credentials: "include",
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      // ignore empty bodies
    }

    if (!res.ok && !data.message)
      data.message = `Request failed (${res.status})`;

    return { ok: res.ok, status: res.status, ...data };
  } catch (err) {
    return { ok: false, status: 0, message: err.message || "Network error" };
  }
}
