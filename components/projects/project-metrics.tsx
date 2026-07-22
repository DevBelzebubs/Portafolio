"use client";

import { useLanguage } from "@/contexts/language-context";

interface ProjectMetricsProps {
  metrics: {
    uptime: string;
    stack: string;
    arch: string;
    containers: string;
  };
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  const { t } = useLanguage();

  return (
    <div className="p-6 border border-outline-variant/15 bg-surface-container-low/50 backdrop-blur-sm">
      <h3 className="font-bold uppercase tracking-widest text-xs font-headline mb-6 text-outline">
        {t("projectDetail.metrics")}
      </h3>
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
          <span className="text-[10px] font-mono text-primary-container uppercase">
            {t("projectDetail.uptime")}
          </span>
          <span className="text-xl font-bold font-headline tracking-tighter">
            {metrics.uptime}
          </span>
        </div>
        <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
          <span className="text-[10px] font-mono text-primary-container uppercase">
            {t("projectDetail.stack")}
          </span>
          <span className="text-sm font-medium">{metrics.stack}</span>
        </div>
        <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
          <span className="text-[10px] font-mono text-primary-container uppercase">
            {t("projectDetail.arch")}
          </span>
          <span className="text-sm font-medium">{metrics.arch}</span>
        </div>
        <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
          <span className="text-[10px] font-mono text-primary-container uppercase">
            {t("projectDetail.containers")}
          </span>
          <span className="text-sm font-medium">
            {metrics.containers}
          </span>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="w-full h-16 bg-surface-container-highest flex items-center justify-center border-l-4 border-tertiary">
          <div className="text-center">
            <div className="text-[9px] font-mono text-outline uppercase tracking-widest">
              {t("projectDetail.healthStatus")}
            </div>
            <div className="text-xs font-bold text-tertiary tracking-widest uppercase">
              {t("projectDetail.healthNominal")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
