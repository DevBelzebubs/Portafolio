"use client";

import { useLanguage } from "@/contexts/language-context";

export default function SchematicsPageHeader() {
  const { t } = useLanguage();

  return (
    <div className="mb-12 border-b border-outline-variant/20 pb-4">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-on-surface tracking-tighter uppercase mb-2">
            {t("schematics.header.title")}
          </h1>
          <p className="font-mono text-xs text-outline tracking-widest">
            {t("schematics.header.ref")}
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <span className="w-3 h-3 bg-tertiary/50"></span>
          <span className="w-3 h-3 bg-primary-container"></span>
          <span className="w-3 h-3 bg-outline-variant"></span>
        </div>
      </div>
    </div>
  );
}
