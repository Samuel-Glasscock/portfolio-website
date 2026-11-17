import Link from 'next/link';

/**
 * An in-site text link: ink-coloured text with a red underline, so it is
 * recognisable as a link without relying on colour alone.
 */
export default function TextLink({
    href,
    children,
    className = '',
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`font-semibold underline decoration-primary decoration-2 underline-offset-[5px] transition-colors hover:text-primary ${className}`}
        >
            {children}
        </Link>
    );
}
