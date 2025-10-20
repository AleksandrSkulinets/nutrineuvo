import { api } from "../api";

export const PublicAPI = {
  getAvailableDays: (startISO, endISO) =>
    api(`/public/available-days?start=${startISO}&end=${endISO}`),

  getAvailableNutritionists: (dateISO) =>
    api(`/public/availability?date=${dateISO}`),

  getNextAvailableDay: () =>
    api("/public/next-available-day"),
};
