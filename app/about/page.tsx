import Image from "next/image";
import Container from "@/app/components/container";
import SectionHeading from "@/app/components/section-heading";
import SkillsList from "@/app/components/skills-list";
import {
  education,
  coursework,
  experiences,
} from "@/lib/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Samuel, a UVA CS student & software engineer focused on web platforms, financial dashboards, and data-driven tooling.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About | Samuel Glasscock",
    description:
      "Background, interests, and what I value when building software.",
  },
};

// Display order and labels for the coursework groups in lib/profile.ts
const courseGroups: [keyof typeof coursework, string][] = [
  ["computerScience", "Computer Science"],
  ["math", "Math"],
  ["business", "Business / Finance"],
];

// A "ledger" row: a narrow key column (group name or dates) beside the content.
// Shared by Coursework and Experience so their left edges line up.
const ledgerRow =
  "grid gap-x-10 gap-y-1 border-t border-border py-5 first:border-t-0 first:pt-1 sm:grid-cols-[11rem_minmax(0,1fr)]";
const ledgerKey =
  "font-stretch-[82%] text-base leading-[1.6] font-bold text-muted-foreground tabular-nums";

export default function AboutPage() {
  return (
    <Container>
      <h1 className="pt-12 pb-9">About me</h1>

      {/* Essay beside a rail holding the photo and education */}
      <div className="grid items-start gap-x-10 gap-y-8 pb-14 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-16">
        <div className="space-y-[1.1rem] [&>p]:max-w-[62ch]">
          <p>
            I&apos;ve always been passionate about applying my software development skills to real world causes,
            specifically to address practical business needs. This interest led me to pursue a Commerce Business
            Minor alongside my Computer Science degree, which piqued my interest for finance and the ways technology
            can make financial systems more efficient and accessible.
          </p>
          <p>
            At the University of Virginia, I&apos;ve had the opportunity to deepen this intersection through coursework in
            software engineering, algorithms, and finance, while also gaining hands-on experience through internships and
            independent projects. Whether it was building web apps, exploring cutting edge fintech technologies, or
            collaborating on class projects, I&apos;ve found that I thrive in environments where technical challenges meet
            strategic impact.
          </p>
          <p>
            Beyond technical skills, I place a strong emphasis on teamwork, communication, and mentorship. Serving as a
            teaching assistant for our Software Engineering course here at UVA has allowed me to guide peers through complex
            concepts, while reinforcing my own ability to break down problems and foster collaboration among teams. These
            experiences have shaped my approach to problem solving: detail-oriented, iterative, and always open to learning
            from others.
          </p>
          <p>
            Looking ahead, I am eager to apply my skills in software development and financial technologies to solve meaningful
            problems that create measurable impact. I&apos;m particularly drawn to opportunities that combine innovative technology,
            data-driven insights, and cross functiontional collaboration. Outside of academics and work, I enjoy music, playing
            guitar, and working on side projects that let me experiment with new ideas and technologies to continuously learn.
          </p>
        </div>

        <aside className="grid items-start gap-6 sm:max-md:grid-cols-[10rem_minmax(0,1fr)]">
          <Image
            src="/headshot.jpeg"
            alt="Samuel Glasscock, arms crossed, under the arches of a colonnade"
            width={800}
            height={1200}
            sizes="(min-width: 768px) 240px, 176px"
            className="aspect-[4/5] h-auto w-full max-w-44 object-cover object-bottom md:max-w-60"
          />
          <section>
            <h2 className="mb-3 border-t-[3px] border-foreground pt-3 text-2xl">Education</h2>
            <p className="font-bold">{education.school}</p>
            <p>{education.degree}</p>
            <p className="mt-1.5 text-[0.9375rem] text-muted-foreground">
              {education.location}, {education.gradDate}
            </p>
          </section>
        </aside>
      </div>

      <section className="pb-14">
        <SectionHeading title="Skills" />
        <SkillsList wide />
      </section>

      <section className="pb-14">
        <SectionHeading title="Coursework" />
        <div>
          {courseGroups.map(([key, label]) => (
            <div key={key} className={ledgerRow}>
              <h3 className={ledgerKey}>{label}</h3>
              {/* .run-in (globals.css) sets the list as running text with " / " between items */}
              <ul className="run-in font-stretch-[92%]">
                {coursework[key].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <SectionHeading title="Experience" />
        <ul>
          {experiences.map((exp) => (
            <li key={exp.role + exp.org} className={ledgerRow}>
              <p className={ledgerKey}>{exp.timeframe}</p>
              <div>
                <h3 className="text-[1.375rem] leading-[1.2]">{exp.role}</h3>
                <p className="mt-0.5 font-semibold">{exp.org}</p>
                {exp.about && <p className="mt-2.5 max-w-[65ch]">{exp.about}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
