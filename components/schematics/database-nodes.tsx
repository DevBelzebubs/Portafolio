"use client";

import { useLanguage } from "@/contexts/language-context";

export default function DatabaseNodes() {
  const { t } = useLanguage();

  return (
    <div className="col-span-1 md:col-span-6 bg-surface-container-low p-6 border border-outline-variant/10">
      <h2 className="font-mono text-sm text-on-surface tracking-widest uppercase flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-lg text-tertiary">database</span>
        {t("schematics.databaseNodes.title")}
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 bg-surface-container p-3 border-l-2 border-primary-container">
          <span className="material-symbols-outlined text-outline-variant text-2xl">storage</span>
          <div className="flex-1">
            <h4 className="font-mono text-xs text-on-surface">{t("schematics.databaseNodes.node1Title")}</h4>
            <p className="font-mono text-[9px] text-outline">{t("schematics.databaseNodes.node1Sub")}</p>
          </div>
          <span className="font-mono text-[9px] text-[#00ff00] bg-[#00ff00]/10 px-2 py-1">{t("schematics.databaseNodes.online")}</span>
        </div>
        <div className="flex items-center gap-4 bg-surface-container p-3 border-l-2 border-outline-variant">
          <span className="material-symbols-outlined text-outline-variant text-2xl">dns</span>
          <div className="flex-1">
            <h4 className="font-mono text-xs text-on-surface">{t("schematics.databaseNodes.node2Title")}</h4>
            <p className="font-mono text-[9px] text-outline">{t("schematics.databaseNodes.node2Sub")}</p>
          </div>
          <span className="font-mono text-[9px] text-[#00ff00] bg-[#00ff00]/10 px-2 py-1">{t("schematics.databaseNodes.online")}</span>
        </div>
      </div>
    </div>
  );
}
