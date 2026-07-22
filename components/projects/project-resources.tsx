"use client";

import { useLanguage } from "@/contexts/language-context";
import type { ProjectRepository } from "@/lib/projects-data";

interface ProjectResourcesProps {
  resources: ProjectRepository[];
}

export default function ProjectResources({ resources }: ProjectResourcesProps) {
  const { t } = useLanguage();

  return (
    <div className="p-6 border border-outline-variant/15 bg-surface-container-lowest">
      <h3 className="font-bold uppercase tracking-widest xs font-headline mb-6 text-outline">
        {t("projectDetail.resources")}
      </h3>
      <div className="space-y-4">
        {resources.map((res) => (
          <a
            key={res.url}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-surface-container-high hover:bg-primary-container/10 transition-colors duration-150 cursor-pointer rounded-lg border border-outline-variant/15"
          >
            <span className="font-mono text-xs text-on-surface group-hover:text-primary-container">
              {res.label}
            </span>
            <span className="material-symbols-outlined text-sm text-primary-container group-hover:text-tertiary transition-colors">
              open_in_new
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
