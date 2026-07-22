"use client";

import { useLanguage } from "@/contexts/language-context";

interface Objective {
  id: string;
  title: string;
  description: string;
}

interface ProjectObjectivesProps {
  objectives: Objective[];
}

export default function ProjectObjectives({
  objectives,
}: ProjectObjectivesProps) {
  const { t } = useLanguage();

  return (
    <div className="p-8 border border-outline-variant/15 bg-surface-container-low/50 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-6">
        <span className="material-symbols-outlined text-tertiary">
          terminal
        </span>
        <h3 className="font-bold uppercase tracking-widest text-sm font-headline">
          {t("projectDetail.objectives")}
        </h3>
        <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj) => (
            <div key={obj.id} className="space-y-2">
              <h4 className="text-xs font-mono text-primary-container">
                {obj.id} // {obj.title}
              </h4>
              <p className="text-sm text-outline leading-relaxed font-light">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
