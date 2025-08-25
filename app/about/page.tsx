import Container from "../components/container";
import {
  education,
  coursework,
  experiences,
  skills,
} from "@/lib/profile";

export default function AboutPage() {
  return (
    <section className="py-10">
      <Container>
        {/* Page title + brief intro */}
        <header className="mb-8">
          <h1>About me</h1>
          <p className="my-2 max-w-prose text-base leading-7 text-muted-foreground">
            I&apos;ve always been passionate about applying my software development skills to real world causes,
            specifically to address practical business needs. This interest led me to pursue a Commerce Business
            Minor alongside my Computer Science degree, which piqued my interest for finance and the ways technology
            can make financial systems more efficient and accessible.
          </p>
          <p className="mt-6 max-w-prose text-base leading-7 text-muted-foreground">
            At the University of Virginia, I&apos;ve had the opportunity to deepen this intersection through coursework in 
            software engineering, algorithms, and finance, while also gaining hands-on experience through internships and 
            independent projects. Whether it was building web apps, exploring cutting edge fintech technologies, or 
            collaborating on class projects, I&apos;ve found that I thrive in environments where technical challenges meet 
            strategic impact.
          </p>
          <p className="mt-6 max-w-prose text-base leading-7 text-muted-foreground">
            Beyond technical skills, I place a strong emphasis on teamwork, communication, and mentorship. Serving as a 
            teaching assistant for our Software Engineering course here at UVA has allowed me to guide peers through complex 
            concepts, while reinforcing my own ability to break down problems and foster collaboration among teams. These 
            experiences have shaped my approach to problem solving: detail-oriented, iterative, and always open to learning 
            from others.
          </p>
          <p className="mt-6 max-w-prose text-base leading-7 text-muted-foreground">
            Looking ahead, I am eager to apply my skills in software development and financial technologies to solve meaningful 
            problems that create measurable impact. I&apos;m particularly drawn to opportunities that combine innovative technology,
            data-driven insights, and cross functiontional collaboration. Outside of academics and work, I enjoy music, playing 
            guitar, and working on side projects that let me experiment with new ideas and technologies to continuously learn.
          </p>
        </header>

        {/* Skills */}
        <section className="mt-6 rounded-lg border border-border p-4">
          <h2>Skills</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {group}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-accent/30 px-2 py-0.5 text-sm text-accent-foreground/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-8 rounded-lg border border-border p-4">
          <h2>Education</h2>
          <p className="mt-2">
            <span className="font-medium">{education.school}</span> - {education.degree}
          </p>
          <p className="text-sm text-muted-foreground">
            {education.location} · {education.gradDate}
          </p>
        </section>

        {/* Coursework categories */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-4">
            <h3>
              Computer Science
            </h3>
            <ul className="flex flex-wrap gap-2">
              {coursework.computerScience.map((c) => (
                <li key={c} className="rounded-md bg-muted px-2 py-1 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3>
              Math
            </h3>
            <ul className="flex flex-wrap gap-2">
              {coursework.math.map((c) => (
                <li key={c} className="rounded-md bg-muted px-2 py-1 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3>
              Business / Finance
            </h3>
            <ul className="flex flex-wrap gap-2">
              {coursework.business.map((c) => (
                <li key={c} className="rounded-md bg-muted px-2 py-1 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h2>Experience</h2>
          <div className="mt-3 grid gap-4">
            {experiences.map((exp) => (
              <article key={exp.role + exp.org} className="rounded-lg border border-border p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium">
                    {exp.role} — {exp.org}
                  </p>
                  {exp.timeframe && (
                    <span className="text-sm text-muted-foreground">{exp.timeframe}</span>
                  )}
                </div>
                {exp.about && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {exp.about}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
