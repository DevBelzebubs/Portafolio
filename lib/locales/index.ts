import es from "./es";
import en from "./en";
import fr from "./fr";

export type Language = "es" | "en" | "fr";

const locales: Record<Language, Record<string, any>> = { es, en, fr };

export function getLocale(lang: Language) {
  return locales[lang];
}

export function t(lang: Language, path: string): string {
  const keys = path.split(".");
  let current: any = locales[lang];
  for (const key of keys) {
    if (current == null) return path;
    current = current[key];
  }
  if (typeof current === "string") return current;
  return path;
}

export function tArray(lang: Language, path: string): any[] {
  const keys = path.split(".");
  let current: any = locales[lang];
  for (const key of keys) {
    if (current == null) return [];
    current = current[key];
  }
  if (Array.isArray(current)) return current;
  return [];
}

export function tObj(lang: Language, path: string): Record<string, any> {
  const keys = path.split(".");
  let current: any = locales[lang];
  for (const key of keys) {
    if (current == null) return {};
    current = current[key];
  }
  if (typeof current === "object" && !Array.isArray(current)) return current;
  return {};
}
