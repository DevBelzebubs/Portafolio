/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Language } from "@/lib/locales";
import { t as translate, tArray as translateArray, tObj as translateObj } from "@/lib/locales";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
  tArray: (path: string) => any[];
  tObj: (path: string) => Record<string, any>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  const tFn = useCallback((path: string) => translate(lang, path), [lang]);
  const tArrayFn = useCallback((path: string) => translateArray(lang, path), [lang]);
  const tObjFn = useCallback((path: string) => translateObj(lang, path), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: tFn, tArray: tArrayFn, tObj: tObjFn }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
