"use client";

import { useLanguage } from "@/contexts/language-context";

export default function LogsPageHeader() {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-8 w-full">
      <div className="mb-4 inline-block border-b border-tertiary/30 pb-1">
        <span className="font-mono text-tertiary text-xs tracking-widest">{t("logs.header.command")}</span>
      </div>
      <h1 className="font-headline text-4xl md:text-6xl font-bold text-on-surface uppercase tracking-tighter mb-4 w-full md:w-3/4 leading-none">
        {t("logs.header.title1")}<br/><span className="text-primary-container">{t("logs.header.title2")}</span>
      </h1>
      <p className="font-mono text-on-surface-variant text-xs md:text-sm max-w-2xl mt-6 opacity-80 leading-relaxed border-l border-outline-variant/30 pl-4">
        {t("logs.header.description")}
      </p>
    </section>
  );
}
