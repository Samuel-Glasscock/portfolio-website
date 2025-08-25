import ProjectCard from "./project-card";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsSection({
  featuredOnly = true,
  variant = featuredOnly ? "compact" : "default",
  showHeader = true,
}: {
  featuredOnly?: boolean;
  variant?: "default" | "compact";
  showHeader?: boolean;
}) {
  const projects = featuredOnly ? getFeaturedProjects() : getAllProjects();

  return (
    <section className="py-10">
      <div className="mx-auto max-w-4xl px-4">
        {showHeader && (
          <div className="mb-4 flex items-center justify-between">
            <h2>Projects</h2>
            <Link href='/projects' className='rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90'>
                See all my Projects &#10132;
            </Link>
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}