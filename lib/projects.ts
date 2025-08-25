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
        summary: "A form-based flow for student to report UVA Honor code violations.",
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
        summary: "An all-around collaboration system for bands to come to one place to view gigs/practices, vote on songs, and download setlists to their provider of choice.",
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
        summary: "A custom customer service chatbot built to be integrated into Babylon Micro-Farm's website.",
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
        summary: "Capturing data through an edge to end data flow project. Capturing data via a BMP581 environmental data sensor into an Odroid-C2 and relaying that data over Modbus to a PLC and to an InfluxDB to be visualized via Grafana.",
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
        summary: "Automating band setlist song choice voting using google sheets and spotipy.",
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