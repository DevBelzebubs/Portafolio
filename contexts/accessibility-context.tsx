"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FontSize = "sm" | "base" | "lg";
type FontFamily = "sans" | "mono";

interface AccessibilityState {
  fontSize: FontSize;
  fontFamily: FontFamily;
  highContrast: boolean;
  setFontSize: (size: FontSize) => void;
  setFontFamily: (family: FontFamily) => void;
  setHighContrast: (val: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityState | undefined>(undefined);

const STORAGE_KEY = "jdgr-accessibility";

function loadSettings() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

function saveSettings(state: { fontSize: FontSize; fontFamily: FontFamily; highContrast: boolean }) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("base");
  const [fontFamily, setFontFamily] = useState<FontFamily>("sans");
  const [highContrast, setHighContrast] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = loadSettings();
    if (saved) {
      setFontSize(saved.fontSize ?? "base");
      setFontFamily(saved.fontFamily ?? "sans");
      setHighContrast(saved.highContrast ?? false);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveSettings({ fontSize, fontFamily, highContrast });
  }, [fontSize, fontFamily, highContrast, hydrated]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("font-size-sm", "font-size-base", "font-size-lg", "font-family-sans", "font-family-mono", "high-contrast");
    html.classList.add(`font-size-${fontSize}`, `font-family-${fontFamily}`);
    if (highContrast) html.classList.add("high-contrast");
  }, [fontSize, fontFamily, highContrast, hydrated]);

  return (
    <AccessibilityContext.Provider value={{ fontSize, fontFamily, highContrast, setFontSize, setFontFamily, setHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
}
