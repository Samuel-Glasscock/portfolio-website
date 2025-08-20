import Hero from '@/app/components/hero';
// import ProjectSection from '@/app/components/projects-section';

export default function Home() {
  return (
    <>
      <Hero />

      <section className='mt-10 max-w-prose'>
        <p className='mt-2 text-muted-foreground'>
          I&apos;m a Computer Science student at the Uninversity of Virginia and a Software Engineer focused on 
          web backends (Django, Python) and modern frontends (React/Next). I like building smooth, reliable user
          experiences and solving real world problems with tangible impact.
        </p>
      </section>

      {/* <ProjectSection limit={5} /> */}
    </>
  );
}
