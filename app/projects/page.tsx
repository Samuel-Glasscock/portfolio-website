import ProjectsSection from "../components/projects-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated selection of software projects - full-stack apps, IoT/analytics work, and class builds.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Projects | Samuel Glasscock",
    description:
      "Case studies with stack, code, and site showcases where available.",
    images: [{ url: "/og/projects.png", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return <ProjectsSection featuredOnly={false} showHeader={false} />;
  // return (
    // <section className="prose dark:prose-invert max-w-none">
    //   <h1>Projects</h1>
    //   <p>Coming soon.</p>
    // </section>
  // );
}