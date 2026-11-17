import type { IconType } from 'react-icons';
import { DiHeroku } from 'react-icons/di';
import { FaJava } from 'react-icons/fa6';
import {
    SiBootstrap,
    SiDjango,
    SiDocker,
    SiDotnet,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiGitlab,
    SiGoogle,
    SiGrafana,
    SiInfluxdb,
    SiJavascript,
    SiNextdotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTypescript,
    SiVercel,
} from 'react-icons/si';
// Simple Icons removed several Microsoft/Oracle/AWS/OpenAI marks for trademark
// reasons, so those come from Tabler instead (Java's cup from Font Awesome,
// Heroku from Devicons). SQL uses a generic database icon on purpose: Tabler's
// TbSql is a tiny "SQL" wordmark that just repeats the label.
import { TbBrandAws, TbBrandCSharp, TbBrandOpenai, TbDatabase } from 'react-icons/tb';

export type TechInfo = {
    Icon: IconType;
    href: string;
};

/**
 * Single source of truth for every technology shown on the site.
 * Skills and project tech chips reference entries by key, so a typo or a
 * missing entry is a type error rather than a silently unstyled chip.
 */
export const tech = {
    Python: { Icon: SiPython, href: 'https://www.python.org' },
    JavaScript: { Icon: SiJavascript, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    TypeScript: { Icon: SiTypescript, href: 'https://www.typescriptlang.org' },
    'C#': { Icon: TbBrandCSharp, href: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    Java: { Icon: FaJava, href: 'https://dev.java' },
    SQL: { Icon: TbDatabase, href: 'https://en.wikipedia.org/wiki/SQL' },

    Django: { Icon: SiDjango, href: 'https://www.djangoproject.com' },
    'Next.js': { Icon: SiNextdotjs, href: 'https://nextjs.org' },
    React: { Icon: SiReact, href: 'https://react.dev' },
    '.NET': { Icon: SiDotnet, href: 'https://dotnet.microsoft.com' },
    Bootstrap: { Icon: SiBootstrap, href: 'https://getbootstrap.com' },

    Docker: { Icon: SiDocker, href: 'https://www.docker.com' },
    Git: { Icon: SiGit, href: 'https://git-scm.com' },
    GitHub: { Icon: SiGithub, href: 'https://github.com' },
    GitLab: { Icon: SiGitlab, href: 'https://about.gitlab.com' },
    'GitHub Actions': { Icon: SiGithubactions, href: 'https://github.com/features/actions' },
    Heroku: { Icon: DiHeroku, href: 'https://www.heroku.com' },
    Vercel: { Icon: SiVercel, href: 'https://vercel.com' },
    'AWS S3': { Icon: TbBrandAws, href: 'https://aws.amazon.com/s3/' },

    PostgreSQL: { Icon: SiPostgresql, href: 'https://www.postgresql.org' },
    InfluxDB: { Icon: SiInfluxdb, href: 'https://www.influxdata.com' },
    Grafana: { Icon: SiGrafana, href: 'https://grafana.com' },

    'Google Login': { Icon: SiGoogle, href: 'https://developers.google.com/identity' },
    'OpenAI Assistants API': { Icon: TbBrandOpenai, href: 'https://platform.openai.com/docs/assistants/overview' },
} as const satisfies Record<string, TechInfo>;

export type TechName = keyof typeof tech;
