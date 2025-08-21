export type ProjectStatus = "Deployed" | "Completed" | "In Progress" | "Archived";

export type Project = {
    id: string;
    title: string;
    summary: string;
    image?: string;
    timeSpan?: string;
    tech?: string[];
    featured: boolean;
    repo?: string;
    status: ProjectStatus;
};

export const projects: Project[] = [
    {
        id: "UVA-honor_reporting",
        title: "UVA Honor Code Reporting App",
        summary: "_",
        timeSpan: "February - May 2024",
        image: "",
        tech: ["Django", "Bootstrap", "PostgreSQL", "Google Login", "S3"],
        featured: true,
        repo: "https://github.com/Samuel-Glasscock/Hoos-Reporting-Honor",
        status: "Completed",
    },
    {
        id: "band-collab",
        title: "Band Collaboration Tool",
        summary: "",
        timeSpan: "July 2025 - Present",
        image: "",
        tech: ["Django", "Bootstrap",],
        featured: true,
        repo: "https://github.com/Samuel-Glasscock/Bandstage",
        status: "In Progress",
    },
    {
        id: "babylon-micro-farms-chatbot",
        title: "Babylon Micro-Farms Chatbot",
        summary: "",
        timeSpan: "January 2024",
        image: "",
        tech: ["React", "OpenAI Assistants API",],
        featured: true,
        repo:"https://github.com/Samuel-Glasscock/babylon-microfarms-chatbot",
        status: "Completed",
    },
    {
        id: "iot-data-visualization",
        title: "IoT Data Collection and Visualization",
        summary: "",
        timeSpan: "July 2025",
        image: "",
        tech: [""],
        featured: false,
        repo: "",
        status: "Completed",
    },
    {
        id: "spotify-playlist-automation",
        title: "Spotify Playlist Automation",
        summary: "",
        timeSpan: "March 2024",
        image: "",
        tech: ["Python",],
        featured: false,
        repo: "https://github.com/Samuel-Glasscock/Spotify-Playlist-Automation",
        status: "Archived",
    },
];

export function getAllProjects(): Project[] {
    return projects;
}

export function getFeaturedProjects(): Project[] {
    return projects.filter(p => p.featured);
}