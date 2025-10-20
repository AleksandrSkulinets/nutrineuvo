// src/lib/api.js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Unified fetch helper that NEVER throws.
 * Always returns: { ok, status, ...data }
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
      // ignore if no JSON body
    }

    if (!res.ok && !data.message) {
      data.message = `Request failed (${res.status})`;
    }

    return { ok: res.ok, status: res.status, ...data };
  } catch (err) {
    return { ok: false, status: 0, message: err.message || "Network error" };
  }
}
