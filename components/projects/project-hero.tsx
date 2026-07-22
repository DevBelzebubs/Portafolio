"use client";

import { useLanguage } from "@/contexts/language-context";

interface ProjectHeroProps {
  refId: string;
  title: string;
  security: string;
  heroDescription: string;
  deployment: string;
}

export default function ProjectHero({
  refId,
  title,
  security,
  heroDescription,
  deployment,
}: ProjectHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="mb-12 relative">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs text-tertiary bg-tertiary/10 px-2 py-0.5">
          {refId}
        </span>
        <div className="h-px flex-1 bg-outline-variant/20"></div>
        <span className="font-mono text-[10px] text-outline tracking-widest uppercase">
          {t("projectDetail.systemSpec")}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-on-background uppercase mb-2">
            {title}
          </h1>
          <p className="text-outline max-w-xl font-light leading-relaxed">
            {heroDescription}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <span className="block font-mono text-[10px] text-outline uppercase">
              {t("projectDetail.securityProtocol")}
            </span>
            <span className="block font-mono text-xs text-primary-container">
              {security}
            </span>
          </div>
          <div className="text-right">
            <span className="block font-mono text-[10px] text-outline uppercase">
              {t("projectDetail.deployment")}
            </span>
            <span className="block font-mono text-xs text-tertiary">
              {deployment}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
