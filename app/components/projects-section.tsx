import Container from "@/app/components/container";
import ProjectRow from "@/app/components/project-row";
import SectionHeading from "@/app/components/section-heading";
import TextLink from "@/app/components/text-link";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";

export default function ProjectsSection({
  featuredOnly = true,
  showHeader = true,
}: {
  featuredOnly?: boolean;
  showHeader?: boolean;
}) {
  const projects = featuredOnly ? getFeaturedProjects() : getAllProjects();

  return (
    <section className="pb-14">
      <Container>
        {showHeader ? (
          <SectionHeading
            title="Selected projects"
            action={<TextLink href="/projects">All projects</TextLink>}
          />
        ) : (
          // No heading (the page supplies its own h1), but keep the rule that opens the list
          <div className="mb-5 border-t-[3px] border-foreground" />
        )}
        <ul>
          {projects.map((p) => (
            <ProjectRow key={p.id} project={p} headingLevel={showHeader ? "h3" : "h2"} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
