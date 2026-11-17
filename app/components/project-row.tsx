import type { Project } from '@/lib/projects';
import { SiGithub } from 'react-icons/si';
import { TbPinned } from 'react-icons/tb';
import TechBadge from '@/app/components/tech-badge';

// Filled + round = a status label (not clickable). Compare TechBadge: outlined + square = link.
const statusStyles: Record<Project['status'], string> = {
    Deployed: 'bg-primary text-primary-foreground',
    'In Progress': 'bg-accent text-accent-foreground',
    Completed: 'bg-muted text-foreground',
    Archived: 'bg-border text-foreground',
};

/**
 * One project as a row in the "track listing": title, summary and tech on the
 * left; date and status on the right (they drop under the title on phones).
 * A pinned project gets a tinted band instead of a divider line.
 *
 * `headingLevel` keeps the document outline correct: the title is an h3 under a
 * section heading (home page) but an h2 directly under a page title (/projects).
 * It looks the same either way; only the tag changes.
 */
export default function ProjectRow({
    project,
    headingLevel: Heading = 'h3',
}: {
    project: Project;
    headingLevel?: 'h2' | 'h3';
}) {
    const pinned = project.pinned ?? false;
    const hasTech = !!project.tech?.length;
    // The pinned band is bg-muted, the same fill as the "Completed" pill, so that pill switches to the page colour there.
    const statusClass =
        pinned && project.status === 'Completed' ? 'bg-background text-foreground' : statusStyles[project.status];

    return (
        <li
            className={`grid gap-x-10 sm:grid-cols-[minmax(0,1fr)_auto] ${
                pinned
                    ? '-mx-3 mb-1 bg-muted px-3 py-4 sm:-mx-5 sm:p-5 [&+li]:border-t-0'
                    : 'border-t border-border py-5.5 first:border-t-0 first:pt-1.5'
            }`}
        >
            <Heading className='font-stretch-[75%] text-2xl leading-[1.15] font-bold sm:col-start-1'>
                {project.title}
                {pinned && (
                    <span className='ml-2.5 inline-flex items-center gap-1 align-middle font-stretch-[86%] text-sm font-bold text-primary'>
                        <TbPinned aria-hidden='true' className='size-4' />
                        Pinned
                    </span>
                )}
            </Heading>

            {/* Date + status: second column on sm+, spanning the rows beside it */}
            <div className='mt-1.5 flex items-center gap-3 sm:col-start-2 sm:row-span-3 sm:row-start-1 sm:mt-0.5 sm:flex-col sm:items-end sm:gap-1.5'>
                {project.timeSpan && (
                    <span className='font-stretch-[86%] text-[0.9375rem] font-semibold whitespace-nowrap text-muted-foreground tabular-nums'>
                        {project.timeSpan}
                    </span>
                )}
                <span className={`rounded-full px-2.5 py-0.5 font-stretch-[88%] text-[0.8125rem] leading-normal font-bold whitespace-nowrap ${statusClass}`}>
                    {project.status}
                </span>
            </div>

            {project.summary && (
                <p className='mt-2 max-w-[60ch] sm:col-start-1'>{project.summary}</p>
            )}

            {(hasTech || project.repo) && (
                <div className='mt-2.5 flex flex-wrap items-center gap-1.5 sm:col-start-1'>
                    {project.tech?.map((t) => (
                        <TechBadge key={t} name={t} />
                    ))}
                    {project.repo && (
                        <a
                            href={project.repo}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`inline-flex items-center gap-1.5 font-stretch-[88%] text-sm font-bold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary ${hasTech ? 'ml-2' : ''}`}
                        >
                            <SiGithub aria-hidden='true' className='size-3.5' />
                            Source
                            <span className='sr-only'> for {project.title} (opens in a new tab)</span>
                        </a>
                    )}
                </div>
            )}
        </li>
    );
}
