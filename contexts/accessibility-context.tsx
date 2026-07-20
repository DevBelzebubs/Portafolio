"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useAccessibilitySettings, type FontSize, type FontFamily } from "@/hooks/use-accessibility-settings";

interface AccessibilityState {
  fontSize: FontSize;
  fontFamily: FontFamily;
  highContrast: boolean;
  isPanelOpen: boolean;
  togglePanel: () => void;
  setPanelOpen: (val: boolean) => void;
  setFontSize: (size: FontSize) => void;
  setFontFamily: (family: FontFamily) => void;
  setHighContrast: (val: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityState | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const { fontSize, fontFamily, highContrast, setFontSize, setFontFamily, setHighContrast } = useAccessibilitySettings();
  const [isPanelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => setPanelOpen((prev) => !prev);

  return (
    <AccessibilityContext.Provider value={{ fontSize, fontFamily, highContrast, isPanelOpen, togglePanel, setPanelOpen, setFontSize, setFontFamily, setHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
}
