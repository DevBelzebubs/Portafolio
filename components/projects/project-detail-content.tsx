"use client";

import { useLanguage } from "@/contexts/language-context";
import type { ProjectData } from "@/lib/projects-data";
import BackButton from "@/components/projects/back-button";
import ProjectHero from "@/components/projects/project-hero";
import ProjectObjectives from "@/components/projects/project-objectives";
import ProjectChallenges from "@/components/projects/project-challenges";
import ProjectMetrics from "@/components/projects/project-metrics";
import ProjectResources from "@/components/projects/project-resources";
import ProjectGallery from "@/components/projects/project-gallery";
import ProjectTerminal from "@/components/projects/project-terminal";

interface ProjectDetailContentProps {
  project: ProjectData;
}

interface TranslatedProject {
  heroDescription: string;
  deployment: string;
  objectives: { id: string; title: string; description: string }[];
  challenges: { id: string; title: string; description: string }[];
  metrics: { uptime: string; stack: string; arch: string; containers: string };
  terminalLines: string[];
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { tObj } = useLanguage();
  const locale = tObj(`projectDetail.projects.${project.slug}`) as TranslatedProject;

  return (
    <section>
      <BackButton />
      <ProjectHero
        refId={project.refId}
        title={project.title}
        security={project.hero.security}
        heroDescription={locale.heroDescription}
        deployment={locale.deployment}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ProjectObjectives objectives={locale.objectives} />
          <ProjectChallenges challenges={locale.challenges} />
        </div>

        <div className="space-y-8">
          <ProjectMetrics metrics={locale.metrics} />
          <ProjectResources resources={project.resources} />
          <ProjectTerminal lines={locale.terminalLines} />
        </div>
      </div>

      <ProjectGallery images={project.gallery} />
    </section>
  );
}
