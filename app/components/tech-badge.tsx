import { tech, type TechName } from '@/lib/tech';

/**
 * Outlined, clickable chip for a technology: logo + name, linking to its site.
 * Outlined = link; filled pills (e.g. project status) = non-interactive labels.
 */
export default function TechBadge({ name }: { name: TechName }) {
    const { Icon, href } = tech[name];

    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-0.5 text-sm text-foreground/90 transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
        >
            <Icon aria-hidden='true' className='size-3.5 shrink-0' />
            {name}
            <span className='sr-only'> (opens in a new tab)</span>
        </a>
    );
}
