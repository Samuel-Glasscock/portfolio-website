import Hero from '@/app/components/hero';
import AboutPreview from '@/app/components/about-overview';
import ProjectSection from '@/app/components/projects-section';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectSection featuredOnly />
    </>
  );
}
