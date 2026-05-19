"use client";

import { useLanguage } from "@/contexts/language-context";

export default function StackV1() {
  const { t, tArray } = useLanguage();
  const skills = tArray("schematics.stackV1.skills") as { name: string; level: number }[];

  return (
    <div className="col-span-1 md:col-span-4 bg-surface-container-high p-6 md:p-8 flex flex-col gap-6 relative">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-mono text-sm text-on-surface tracking-widest uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-lg text-primary-container">layers</span>
          {t("schematics.stackV1.title")}
        </h2>
      </div>
      <div className="space-y-6 flex-1 flex flex-col justify-center">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between font-mono text-[10px] mb-2">
              <span className="text-on-surface">{skill.name}</span>
              <span className="text-tertiary">{skill.level}%</span>
            </div>
            <div className="w-full h-1 bg-surface-container-lowest">
              <div className="h-full bg-primary-container relative" style={{ width: `${skill.level}%` }}>
                {skill.level >= 90 && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
