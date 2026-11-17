import { tech, type TechName } from '@/lib/tech';

/**
 * Outlined, clickable chip for a technology: logo + name, linking to its site.
 * Outlined + square = link; filled + round (e.g. project status) = non-interactive label.
 */
export default function TechBadge({ name }: { name: TechName }) {
    const { Icon, href } = tech[name];

    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 rounded-xs border-[1.5px] border-muted-foreground px-2 py-[0.12rem] font-stretch-[88%] text-sm leading-[1.45] font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background'
        >
            <Icon aria-hidden='true' className='size-3.5 shrink-0' />
            {name}
            <span className='sr-only'> (opens in a new tab)</span>
        </a>
    );
}
