"use client";

import { useLanguage } from "@/contexts/language-context";

const stats = [
  { icon: "calendar_today", key: "experience" },
  { icon: "inventory_2", key: "projects" },
  { icon: "code", key: "stack" },
  { icon: "language", key: "languages" },
];

export default function StatsCard() {
  const { t } = useLanguage();

  return (
    <div className="bg-surface-container-low border border-outline-variant/30 p-6 flex flex-col relative group overflow-hidden">
      <div className="absolute top-0 right-0 w-1 h-full bg-tertiary/20 group-hover:bg-tertiary/40 transition-colors" />
      
      <h3 className="text-sm font-medium text-tertiary mb-4 tracking-wider flex items-center gap-2">
        <span className="material-symbols-outlined text-base">query_stats</span>
        QUICK_STATS // {t("statsCard.title")}
      </h3>

      <div className="space-y-3">
        {stats.map((s) => (
          <div key={s.key} className="flex items-center gap-3 bg-black/20 border border-outline-variant/10 p-3">
            <span className="material-symbols-outlined text-primary-container text-lg">{s.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[9px] text-outline tracking-widest uppercase">
                {t(`statsCard.${s.key}.label`)}
              </p>
              <p className="font-mono text-xs text-on-surface font-bold truncate">
                {t(`statsCard.${s.key}.value`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
