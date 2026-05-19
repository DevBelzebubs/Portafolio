"use client";

import { useLanguage } from "@/contexts/language-context";

export default function ExternalNodes() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container-high p-6 flex flex-col gap-4">
      <h3 className="font-mono text-xs text-outline uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-2">
        {t("core.externalNodes.title")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <a className="flex flex-col p-4 border border-outline-variant/20 hover:border-primary hover:bg-primary/5 transition-all group" href="#">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">work</span>
            <span className="w-1.5 h-1.5 bg-outline group-hover:bg-primary shadow-[0_0_5px_rgba(46,91,255,0)] group-hover:shadow-[0_0_8px_rgba(46,91,255,0.6)]"></span>
          </div>
          <span className="font-bold text-sm text-on-surface">{t("core.externalNodes.linkedin")}</span>
          <span className="font-mono text-[9px] text-outline mt-1">{t("core.externalNodes.linkedinSub")}</span>
        </a>
        <a className="flex flex-col p-4 border border-outline-variant/20 hover:border-tertiary hover:bg-tertiary/5 transition-all group" href="#">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors">code</span>
            <span className="w-1.5 h-1.5 bg-outline group-hover:bg-tertiary shadow-[0_0_5px_rgba(255,186,32,0)] group-hover:shadow-[0_0_8px_rgba(255,186,32,0.6)]"></span>
          </div>
          <span className="font-bold text-sm text-on-surface">{t("core.externalNodes.github")}</span>
          <span className="font-mono text-[9px] text-outline mt-1">{t("core.externalNodes.githubSub")}</span>
        </a>
      </div>
    </section>
  );
}
