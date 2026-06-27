"use client";

export interface SiteSettings {
  discountPercent: number;
  timerEndDate: string;
  preorderEnabled: boolean;
}

const DEFAULT_SETTINGS: SiteSettings = {
  discountPercent: 25,
  timerEndDate: "2026-11-19T00:00:00",
  preorderEnabled: true,
};

const KEY = "gta6_settings";

export function getSettings(): SiteSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(s: SiteSettings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function clearSettings() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
