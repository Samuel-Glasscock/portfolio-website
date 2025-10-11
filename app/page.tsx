import Hero from '@/app/components/hero';
import AboutPreview from '@/app/components/about-overview';
import ProjectSection from '@/app/components/projects-section';
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Welcome to my personal site - highlights of recent projects, skills, and what I'm working on now.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Home | Samuel Glasscock",
    description:
      "Recent projects, tech stack, and quick links to contact me.",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectSection featuredOnly />
    </>
  );
}
