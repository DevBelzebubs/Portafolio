"use client";

import { useLanguage } from "@/contexts/language-context";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container-low p-6 relative group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-outline-variant opacity-15"></div>
      <div className="flex justify-between items-start mb-8">
        <h2 className="font-headline text-xl font-bold uppercase tracking-tight text-on-surface">{t("core.education.title")}</h2>
        <span className="font-mono text-[10px] text-tertiary bg-tertiary/10 px-2 py-1">{t("core.education.dataLoaded")}</span>
      </div>
      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary shadow-[0_0_10px_rgba(46,91,255,0.5)]"></span>
            <h3 className="font-bold text-lg text-primary-fixed">{t("core.education.uni1")}</h3>
          </div>
          <div className="pl-5 flex flex-col gap-1">
            <span className="font-mono text-sm text-on-surface-variant">{t("core.education.degree1")}</span>
            <div className="flex items-center gap-4 mt-2">
              <span className="font-mono text-[10px] text-outline">{t("core.education.cycle")}</span>
              <div className="flex-1 h-1 bg-surface-container-highest max-w-[200px] relative">
                <div className="absolute top-0 left-0 h-full bg-primary w-[90%]"></div>
              </div>
              <span className="font-mono text-[10px] text-primary">{t("core.education.percentage")}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-tertiary shadow-[0_0_10px_rgba(255,186,32,0.3)]"></span>
            <h3 className="font-bold text-lg text-tertiary-fixed">{t("core.education.uni2")}</h3>
          </div>
          <div className="pl-5 flex flex-col gap-1">
            <span className="font-mono text-sm text-on-surface-variant">{t("core.education.cert2")}</span>
            <span className="font-mono text-[10px] text-outline mt-1">{t("core.education.status2")}</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 text-right">
        <span className="font-mono text-[8px] text-outline-variant">{t("core.education.ref")}</span>
      </div>
    </section>
  );
}
