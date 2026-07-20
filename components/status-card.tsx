"use client";

import { useLanguage } from "@/contexts/language-context";

export default function StatusCard() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-surface-container-low p-6 outline outline-1 outline-outline-variant/15 glow-active relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-20">
        <span className="material-symbols-outlined text-[64px]">memory</span>
      </div>
      <div className="text-tertiary font-label text-xs mb-4 flex items-center justify-between border-b border-outline-variant/20 pb-2">
        <span>{t("statusCard.title")}</span>
        <span>{t("statusCard.online")}</span>
      </div>
      <div className="space-y-4 font-label text-xs text-on-surface-variant">
        <div className="flex justify-between">
          <span>{t("statusCard.uptime")}</span>
          <span className="text-on-surface">{t("statusCard.uptimeVal")}</span>
        </div>
        <div className="flex justify-between">
          <span>{t("statusCard.arch")}</span>
          <span className="text-primary">{t("statusCard.archVal")}</span>
        </div>
        <div className="flex justify-between">
          <span>{t("statusCard.role")}</span>
          <span className="text-on-surface">{t("statusCard.roleVal")}</span>
        </div>
        <div className="flex justify-between">
          <span>{t("statusCard.queryOpt")}</span>
          <span className="text-tertiary">{t("statusCard.queryOptVal")}</span>
        </div>
        <div className="flex justify-between">
          <span>{t("statusCard.deploy")}</span>
          <span className="text-primary">{t("statusCard.deployVal")}</span>
        </div>
      </div>
    </div>
  );
}
