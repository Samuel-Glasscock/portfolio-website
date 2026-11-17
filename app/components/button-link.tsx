import Link from 'next/link';

/**
 * The one solid button on the site: a link that looks like a button.
 * Solid = the main action on a page; everything else is a TextLink.
 */
export default function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className='inline-block rounded-xs bg-foreground px-[1.15rem] py-[0.65rem] font-stretch-[86%] text-[1.0625rem] leading-tight font-bold text-background transition-colors hover:bg-primary hover:text-primary-foreground'
        >
            {children}
        </Link>
    );
}
