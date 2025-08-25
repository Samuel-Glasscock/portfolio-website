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
        about: "As a Teaching Assistant for our Software Engineering course here at UVA (CS3240), I guide 2 teams (10 students total) on their semester-long projects, meeting with them following a Scrum methodology to provide technical guidance and resolve roadblocks during weekly progress meetings. In addition to my assigned teams, I also hold office hours 3 hours per week open to any student in the class to help them troubleshoot their coding issues and mentor them on best practices. I also evaluate student assignments and projects, delivering feedback to improve students' understanding of the software development process.",
    },
    {
        role: "Digital Systems Intern",
        org: "CCAM - Commonwealth Center for Advanced Manufacturing",
        timeframe: "May 2025 - August",
        about: "As a member of the Digital Systems team, I worked on projects at the intersection of software engineering, IoT, and advanced manufacturing, supporting process automation and Industry 5.0 initiatives. My work ranged from integrating IoT devices with backend infrastructure using Python, C#, .NET, Docker, InfluxDB, and Grafana, to developing new software modules that optimized workflows for data collection, visualization, and monitoring. I also collaborated with the Data Science team, gaining cross-functional exposure to how data engineering, analytics, and software development intersect in a R&D setting.",
    }
]

export const skills = {
    Languages: ["Python", "JavaScript/TypeScript", "C#", "Java", "SQL"],
    Frameworks: ["Django", "Next.js/React", ".NET"],
    DevOps: ["Docker", "Git/Github/Gitlab", "Github Actions CI/CD", "Heroku", "Vercel"],
    Data: ["PostgreSQL", "InfluxDB", "Grafana"],
};