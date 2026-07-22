"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

interface FullCardProps {
  refId: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string; variant?: "tertiary" | "primary" }[];
  slug?: string;
}

export default function FullCard({ refId, title, subtitle, description, tags, metrics, slug }: FullCardProps) {
  const { t } = useLanguage();

  const content = (
    <article className="col-span-1 md:col-span-12 bg-surface-container-low relative group p-6 md:p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-300 border-t border-outline-variant/15 snap-start min-h-[300px]">
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-highest flex items-center px-4 gap-2">
        <div className="w-1.5 h-1.5 bg-primary-container opacity-60"></div>
        <div className="w-1.5 h-1.5 bg-tertiary opacity-60"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 mt-2">
        <div>
          <span className="font-mono text-tertiary text-[10px] tracking-widest block mb-2 opacity-80">{refId}</span>
          <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-1">{title}</h2>
          <p className="font-mono text-primary-container text-xs">{subtitle}</p>
        </div>
        <div className="font-mono text-[10px] bg-primary-container/10 text-primary-container px-3 py-1.5 border border-primary-container/20 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary-container animate-pulse"></div>
          {t("logs.statusStable")}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs md:text-sm">
        <div className="col-span-1 md:col-span-3 text-on-surface-variant leading-relaxed">
          <p className="mb-6">{description}</p>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <span key={tag} className="bg-surface-container-highest text-on-surface px-2 py-1 text-[10px] border border-outline-variant/30">{tag}</span>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-end gap-3 md:border-l border-outline-variant/15 md:pl-6 pt-4 md:pt-0">
          {metrics.map((m) => (
            <div key={m.label} className="flex justify-between items-end border-b border-outline-variant/10 pb-1">
              <span className="text-on-surface-variant text-[9px] opacity-70">{m.label}</span>
              <span className={m.variant === "primary" ? "text-primary-container" : "text-tertiary"}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );

  if (slug) {
    return (
      <Link href={`/projects/${slug}`} className="block col-span-1 md:col-span-12">
        {content}
      </Link>
    );
  }

  return content;
}
