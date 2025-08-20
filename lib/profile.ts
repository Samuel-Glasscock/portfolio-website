export const education = {
    school: "University of Virginia",
    degree: "B.S. in Computer Science (School of Engineering), Minor in Business Commerce",
    gradDate: "May 2026",
    location: "Charlottesville, VA",
};

export const coursework = {
    computerScience: [
        "Software Engineering",
        "Data Structures & Algorithms",
        "Computer Systems & Organization",
        "Software Development Essentials",
        "Cloud Computing",
        "Cybersecurity",
        "Cryptocurrency"
    ],
    math: [
        "Single & Multivariable Calculus",
        "Probability",
        "Statistics",
        "Linear Algebra"
    ],
    business: [
        "Accounting",
        "Corporate Finance",
        "Personal Finance",
        "Marketing",
        "Digital Workplace Skills",
    ],
};

export type Experience = {
    role: string;
    org: string;
    timeframe?: string;
    about: string;
};

export const experiences: Experience[] = [
    {
        role: "Teaching Assistant - Software Engineering",
        org: "University of Virginia",
        timeframe: "August 2024 - Present",
        about: "I _",
    },
    {
        role: "Digital Systems Intern",
        org: "CCAM - Commonwealth Center for Advanced Manufacturing",
        timeframe: "May 2025 - August",
        about: "I _",
    }
]

export const skills = {
    Languages: ["Python", "JavaScript/TypeScript", "C#", "Java", "SQL"],
    Frameworks: ["Django", "Next.js/React", ".NET"],
    DevOps: ["Docker", "Git/Github/Gitlab", "Github Actions CI/CD", "Heroku", "Vercel"],
    Data: ["PostgreSQL", "InfluxDB", "Grafana"],
};