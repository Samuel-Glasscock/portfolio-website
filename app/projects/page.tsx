import Container from "@/app/components/container";
import ProjectsSection from "@/app/components/projects-section";
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
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Container>
        <h1 className="pt-12 pb-9">Projects</h1>
      </Container>
      <ProjectsSection featuredOnly={false} showHeader={false} />
    </>
  );
}