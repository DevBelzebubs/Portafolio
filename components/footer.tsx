"use client";

import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="fixed bottom-0 w-full z-50 h-8 border-t border-primary-container/10 bg-background flex items-center justify-between px-6">
      <span className="font-mono text-[9px] uppercase opacity-60 text-tertiary">
        {t("footer.copyright")}
      </span>
      <div className="flex gap-4">
        <span className="font-mono text-[9px] uppercase opacity-60 text-gray-500 hover:text-primary-container cursor-crosshair transition-colors">{t("footer.github")}</span>
        <span className="font-mono text-[9px] uppercase opacity-60 text-gray-500 hover:text-primary-container cursor-crosshair transition-colors">{t("footer.docs")}</span>
        <span className="font-mono text-[9px] uppercase opacity-60 text-gray-500 hover:text-primary-container cursor-crosshair transition-colors">{t("footer.debug")}</span>
      </div>
    </footer>
  );
}
