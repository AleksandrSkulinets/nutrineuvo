// src/lib/PublicAPI.js
import { api } from "../api";

export const PublicAPI = {
  getAvailableDays: (startISO, endISO) => {
    const params = new URLSearchParams();
    if (startISO) params.append("start", startISO);
    if (endISO) params.append("end", endISO);
    return api(`/public/available-days?${params.toString()}`);
  },

  getAvailableSlots: (dateISO) => {
    return api(`/public/available-slots?date=${dateISO}`);
  },


  getAvailableServices: () => api("/public/services"),

};
