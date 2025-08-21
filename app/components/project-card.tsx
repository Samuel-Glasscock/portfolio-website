import Image from 'next/image';
import type { Project } from '@/lib/projects';
import { SiGithub } from 'react-icons/si';

const statusStyles: Record<Project['status'], string> = {
    Deployed: "bg-primary/15 text-primary",
    "In Progress": "bg-accent/30 text-accent-foreground/90",
    Completed: "bg-muted text-foreground/80",
    Archived: "bg-muted text-muted-foreground",
};

export default function ProjectCard({
    project,
    variant = 'default',
}: {
    project: Project;
    variant?: 'default' | 'compact';
}) {
    const pad = variant === 'compact' ? 'p-3' : 'p-4';
    const titleClass = variant === 'compact' ? 'text-base' : 'text-lg';
    const showSummary = variant !== 'compact';
    const techMax = variant === 'compact' ? 4 : Infinity;
    const hasImage = !!project.image && project.image.trim() !== '';

    return (
        <div className='group overflow-hidden rounded-xl border border-border bg-background transition-colors hover:bg-muted'>
            {/* Optional Image */}
            {hasImage ? (
                <div className='relative aspect-[16/9]'>
                    <Image
                        src='{project.image}'
                        alt=''
                        fill
                        sizes='(min-width: 768px) 33vm, 100vm'
                        className='object-cover'
                    />
                </div>
            ) : (
                <div className='aspect-[16-9] bg-muted'/>
            )}

            <div className={pad}>  
                {/* Title and metadata */}
                <div className="flex items-center justify-between gap-3">
                    <h3 className={`${titleClass} font-semibold group-hover:text-primary`}>
                        {project.title}
                    </h3>
                    {project.timeSpan && (
                        <span className="text-s text-muted-foreground">{project.timeSpan}</span>
                    )}
                    </div>

                    {/* Status */}
                    <div className="mt-2">
                    <span className={`inline-block rounded-md px-2 py-0.5 text-s ${statusStyles[project.status]}`}>
                        {project.status}
                    </span>
                    </div>

                    {/* Summary */}
                    {showSummary && project.summary && (
                    <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                    )}

                    {/* Tech chips */}
                    {project.tech?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.tech.slice(0, techMax).map((t) =>
                        t ? (
                            <span
                            key={t}
                            className="rounded-md bg-accent/30 px-2 py-0.5 text-s text-accent-foreground/90"
                            >
                            {t}
                            </span>
                        ) : null
                        )}
                        {techMax < (project.tech?.length ?? 0) && (
                        <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                            +{(project.tech!.length - techMax).toString()}
                        </span>
                        )}
                    </div>
                    ) : null}

                    {/* Actions (repo / demo) */}
                    {(project.repo) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs hover:bg-background"
                        >
                        <SiGithub className="h-3.5 w-3.5" />
                        Source
                        </a>
                    </div>
                    )}
            </div>
        </div>
    );
}