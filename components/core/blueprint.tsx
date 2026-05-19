"use client";

import { useLanguage } from "@/contexts/language-context";

export default function Blueprint() {
  const { t } = useLanguage();

  return (
    <section className="w-full h-64 bg-surface-container-highest relative overflow-hidden flex items-center justify-center border border-outline-variant/10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
      <div className="z-10 text-center flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-outline mb-2">schema</span>
        <span className="font-mono text-xs text-outline tracking-widest">{t("core.blueprint.label")}</span>
      </div>
    </section>
  );
}
