"use client";

import { useLanguage } from "@/contexts/language-context";

interface HalfCardProps {
  refId: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  tags: string[];
}

export default function HalfCard({ refId, title, subtitle, icon, description, tags }: HalfCardProps) {
  const { t } = useLanguage();

  return (
    <article className="col-span-1 md:col-span-6 bg-surface-container-low relative group p-6 flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-300 border-t border-outline-variant/15 min-h-[320px] snap-start">
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-highest flex items-center px-4 gap-2">
        <div className="w-1.5 h-1.5 bg-primary-container opacity-60"></div>
      </div>
      <div className="flex justify-between items-start mb-6 mt-2">
        <div>
          <span className="font-mono text-tertiary text-[10px] tracking-widest block mb-2 opacity-80">{refId}</span>
          <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-1">{title}</h2>
          <p className="font-mono text-primary-container text-[10px]">{subtitle}</p>
        </div>
        <span className="material-symbols-outlined text-outline-variant group-hover:text-tertiary transition-colors">{icon}</span>
      </div>
      <div className="font-mono text-xs text-on-surface-variant mb-6 flex-1">
        <p>{description}</p>
      </div>
      <div className="flex justify-between items-end mt-auto pt-4 border-t border-outline-variant/10">
        <div className="flex gap-2 flex-wrap w-2/3">
          {tags.map((tag) => (
            <span key={tag} className="bg-surface-container-highest text-on-surface px-2 py-0.5 text-[9px] border border-outline-variant/30">{tag}</span>
          ))}
        </div>
        <div className="font-mono text-[9px] text-primary-container text-right">
          <span className="block opacity-60">{t("logs.status")}</span>
          <span>STABLE</span>
        </div>
      </div>
    </article>
  );
}
