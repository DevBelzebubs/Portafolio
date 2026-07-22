import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects-data";
import ProjectDetailContent from "@/components/projects/project-detail-content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
