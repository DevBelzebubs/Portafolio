"use client";

import { useState, useEffect } from "react";

export type FontSize = "sm" | "base" | "lg";
export type FontFamily = "sans" | "mono";

const STORAGE_KEY = "jdgr-accessibility";

export function useAccessibilitySettings() {
  const [fontSize, setFontSize] = useState<FontSize>("base");
  const [fontFamily, setFontFamily] = useState<FontFamily>("sans");
  const [highContrast, setHighContrast] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.fontSize) setFontSize(saved.fontSize);
        if (saved.fontFamily) setFontFamily(saved.fontFamily);
        if (typeof saved.highContrast === "boolean") setHighContrast(saved.highContrast);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const data = { fontSize, fontFamily, highContrast };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [fontSize, fontFamily, highContrast, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    const html = document.documentElement;
    html.classList.remove(
      "font-size-sm", "font-size-base", "font-size-lg",
      "font-family-sans", "font-family-mono",
      "high-contrast"
    );
    html.classList.add(`font-size-${fontSize}`, `font-family-${fontFamily}`);
    if (highContrast) html.classList.add("high-contrast");
  }, [fontSize, fontFamily, highContrast, hydrated]);

  return { fontSize, fontFamily, highContrast, hydrated, setFontSize, setFontFamily, setHighContrast };
}
