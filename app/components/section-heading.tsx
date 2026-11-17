/**
 * The heavy rule + heading that opens every section, with an optional link on
 * the right (e.g. "All projects"). The rule is the divider between blocks, so
 * sections need no boxes around them.
 */
export default function SectionHeading({
    title,
    action,
}: {
    title: string;
    action?: React.ReactNode;
}) {
    return (
        <div className='mb-5 flex items-baseline justify-between gap-4 border-t-[3px] border-foreground pt-3'>
            <h2>{title}</h2>
            {action}
        </div>
    );
}
