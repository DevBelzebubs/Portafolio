"use client";

import { useLanguage } from "@/contexts/language-context";

export default function TerminalForm() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container w-full relative flex flex-col shadow-lg shadow-black/50">
      <div className="h-8 bg-surface-container-highest flex items-center px-4 justify-between border-b border-outline-variant/20">
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-error opacity-50"></span>
          <span className="w-2 h-2 bg-tertiary opacity-50"></span>
          <span className="w-2 h-2 bg-primary opacity-50"></span>
        </div>
        <span className="font-mono text-[9px] text-outline uppercase tracking-widest">{t("core.terminalForm.title")}</span>
      </div>
      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-1 mb-2">
          <span className="font-mono text-xs text-primary">{t("core.terminalForm.prompt1")}</span>
          <span className="font-mono text-xs text-outline">{t("core.terminalForm.prompt2")}</span>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 relative group">
            <label className="font-mono text-[10px] text-outline-variant uppercase">{t("core.terminalForm.nameLabel")}</label>
            <div className="flex items-end">
              <span className="font-mono text-primary mr-2 mb-1">&gt;</span>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface font-mono text-sm py-1 px-0 transition-colors placeholder:text-surface-variant focus:shadow-[0_1px_10px_-2px_rgba(46,91,255,0.3)]"
                placeholder={t("core.terminalForm.namePlaceholder")}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 relative group">
            <label className="font-mono text-[10px] text-outline-variant uppercase">{t("core.terminalForm.emailLabel")}</label>
            <div className="flex items-end">
              <span className="font-mono text-primary mr-2 mb-1">&gt;</span>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface font-mono text-sm py-1 px-0 transition-colors placeholder:text-surface-variant focus:shadow-[0_1px_10px_-2px_rgba(46,91,255,0.3)]"
                placeholder={t("core.terminalForm.emailPlaceholder")}
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 relative group">
            <label className="font-mono text-[10px] text-outline-variant uppercase">{t("core.terminalForm.msgLabel")}</label>
            <div className="flex items-start mt-1">
              <span className="font-mono text-primary mr-2 mt-1">&gt;</span>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface font-mono text-sm py-1 px-0 transition-colors placeholder:text-surface-variant resize-none focus:shadow-[0_1px_10px_-2px_rgba(46,91,255,0.3)]"
                placeholder={t("core.terminalForm.msgPlaceholder")}
                rows={4}
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-primary-container text-on-primary-container font-mono text-sm uppercase py-4 hover:bg-primary transition-colors flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="material-symbols-outlined text-base">send</span>
            {t("core.terminalForm.submit")}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </form>
      </div>
    </section>
  );
}
