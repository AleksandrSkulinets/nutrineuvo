// src/lib/api.js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Unified fetch helper that NEVER throws.
 * Always returns { ok, status, data, message }
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

    const contentType = res.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");
    const data = isJson ? await res.json() : {};

    const payload = {
      ok: res.ok,
      status: res.status,
      data, // ✅ wrap everything under `.data` for consistent API usage
      message: data.message || (res.ok ? "OK" : `Request failed (${res.status})`),
    };

    return payload;
  } catch (err) {
    console.error("❌ API error:", err);
    return { ok: false, status: 0, data: null, message: err.message || "Network error" };
  }
}
