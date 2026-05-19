"use client";

import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/locales";

const langs: { code: Language; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-mono text-[9px] tracking-widest">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-1.5 py-0.5 transition-colors ${
            lang === l.code
              ? "text-tertiary bg-tertiary/10"
              : "text-outline hover:text-primary-container"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
