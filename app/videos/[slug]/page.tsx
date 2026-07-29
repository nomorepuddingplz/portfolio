import VideoProjectDetailClient from "../VideoProjectDetailClient";
import { videoProjects } from "../video-projects";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return videoProjects.map((project) => ({ slug: project.slug }));
}

export default async function VideoProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const project = videoProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <VideoProjectDetailClient
      project={project}
      initialLanguage={lang === "zh" ? "zh" : "en"}
    />
  );
}
