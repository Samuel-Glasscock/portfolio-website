import ProjectsSection from "../components/projects-section";

export default function ProjectsPage() {
  return <ProjectsSection featuredOnly={false} showHeader={false} />;
  // return (
    // <section className="prose dark:prose-invert max-w-none">
    //   <h1>Projects</h1>
    //   <p>Coming soon.</p>
    // </section>
  // );
}