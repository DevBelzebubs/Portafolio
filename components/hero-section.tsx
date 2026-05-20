"use client";

import { useLanguage } from "@/contexts/language-context";
import StatusCard from "./status-card";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-12 snap-start" id="core">
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-tertiary animate-pulse"></span>
            <span className="font-label text-xs text-outline tracking-wider">{t("hero.ref")}</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-none tracking-tighter text-on-surface mb-6 uppercase">
            {t("hero.title1")} <br/>
            <span className="text-primary-container">{t("hero.title2")}</span> <br/>
            {t("hero.title3")}
          </h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl border-l-2 border-outline-variant/30 pl-6 py-2">
            {t("hero.description")}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-3 font-label text-sm uppercase hover:bg-primary-container/90 border-b-2 border-transparent hover:border-tertiary transition-all">
              {t("hero.btnDeploy")}
            </button>
            <button className="px-8 py-3 font-label text-sm uppercase text-primary border border-outline-variant/20 hover:bg-primary/10 transition-colors">
              {t("hero.btnLogs")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
