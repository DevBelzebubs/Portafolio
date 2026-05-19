"use client";

import { useLanguage } from "@/contexts/language-context";

export default function CorePageHeader() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col mb-12">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface uppercase tracking-tight mb-2">
        {t("core.header.title")}
      </h1>
      <div className="flex items-center gap-4">
        <div className="h-[1px] w-12 bg-primary"></div>
        <span className="font-mono text-xs text-primary uppercase tracking-widest">
          {t("core.header.module")}
        </span>
      </div>
    </div>
  );
}
