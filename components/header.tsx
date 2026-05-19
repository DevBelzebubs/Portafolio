"use client";

import { useLanguage } from "@/contexts/language-context";
import LanguageSwitcher from "@/components/language-switcher";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 h-14 md:h-16 bg-background flex justify-between items-center px-6 bg-gradient-to-b from-[#1c1c1e] to-transparent">
      <div className="flex items-center gap-4">
        <span className="font-bold tracking-[0.2em] text-primary-container font-headline uppercase tracking-tighter text-xs md:text-sm hover:text-tertiary hover:bg-primary-container/10 transition-colors duration-150 cursor-pointer">
          {t("header.brand")}
        </span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <span className="font-mono text-[10px] text-tertiary tracking-widest uppercase">
          {t("header.status")}
        </span>
        <LanguageSwitcher />
        <div className="flex gap-4 text-primary-container">
          <span className="material-symbols-outlined text-sm hover:text-tertiary transition-colors cursor-pointer">terminal</span>
          <span className="material-symbols-outlined text-sm hover:text-tertiary transition-colors cursor-pointer">settings_input_component</span>
        </div>
      </div>
    </header>
  );
}
