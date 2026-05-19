"use client";

import { useLanguage } from "@/contexts/language-context";

export default function CoreInfra() {
  const { t } = useLanguage();

  return (
    <div className="col-span-1 md:col-span-8 bg-surface-container-low p-6 md:p-8 relative group tech-glow">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-transparent opacity-50"></div>
      <div className="flex justify-between items-start mb-8">
        <h2 className="font-mono text-sm text-primary-container tracking-widest uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">architecture</span>
          {t("schematics.coreInfra.title")}
        </h2>
        <span className="font-mono text-[10px] text-tertiary border border-tertiary/20 px-2 py-1">{t("schematics.coreInfra.tier")}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 z-0"></div>
        <div className="bg-surface-container p-4 border border-outline-variant/20 relative z-10 hover:border-primary-container/50 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center bg-surface-dim border border-primary-container/30 mb-4">
            <span className="material-symbols-outlined text-primary-container text-sm">hexagon</span>
          </div>
          <h3 className="font-headline font-semibold text-sm mb-2 text-on-surface">{t("schematics.coreInfra.card1Title")}</h3>
          <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">{t("schematics.coreInfra.card1Desc")}</p>
        </div>
        <div className="bg-surface-container p-4 border border-outline-variant/20 relative z-10 hover:border-primary-container/50 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center bg-surface-dim border border-tertiary/30 mb-4">
            <span className="material-symbols-outlined text-tertiary text-sm">grid_view</span>
          </div>
          <h3 className="font-headline font-semibold text-sm mb-2 text-on-surface">{t("schematics.coreInfra.card2Title")}</h3>
          <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">{t("schematics.coreInfra.card2Desc")}</p>
        </div>
        <div className="bg-surface-container p-4 border border-outline-variant/20 relative z-10 hover:border-primary-container/50 transition-colors">
          <div className="w-8 h-8 flex items-center justify-center bg-surface-dim border border-primary-container/30 mb-4">
            <span className="material-symbols-outlined text-primary-container text-sm">router</span>
          </div>
          <h3 className="font-headline font-semibold text-sm mb-2 text-on-surface">{t("schematics.coreInfra.card3Title")}</h3>
          <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">{t("schematics.coreInfra.card3Desc")}</p>
        </div>
      </div>
    </div>
  );
}
