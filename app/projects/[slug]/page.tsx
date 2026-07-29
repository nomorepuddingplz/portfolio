import ProjectDetailClient from "../ProjectDetailClient";
import { portfolioProjects } from "../project-data";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-missing">
        <p>Project not found.</p>
        <a href="/#projects">Back to portfolio</a>
      </main>
    );
  }

  return <ProjectDetailClient project={project} />;
}
