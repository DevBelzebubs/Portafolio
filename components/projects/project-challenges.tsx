"use client";

import { useLanguage } from "@/contexts/language-context";

interface Challenge {
  id: string;
  title: string;
  description: string;
}

interface ProjectChallengesProps {
  challenges: Challenge[];
}

export default function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  const { t } = useLanguage();

  return (
    <div className="p-8 border border-outline-variant/15 bg-surface-container-low">
      <div className="flex items-center gap-4 mb-6">
        <span className="material-symbols-outlined text-primary-container">
          bug_report
        </span>
        <h3 className="font-bold uppercase tracking-widest text-sm font-headline">
          {t("projectDetail.challenges")}
        </h3>
        <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
      </div>
      <div className="space-y-8">
        {challenges.map((ch) => (
          <div key={ch.id} className="flex gap-6 items-start">
            <div className="font-mono text-xl text-tertiary/20">{ch.id}</div>
            <div>
              <h4 className="text-sm font-bold text-on-background mb-1">
                {ch.title}
              </h4>
              <p className="text-sm text-outline leading-relaxed font-light">
                {ch.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
