import TechBadge from '@/app/components/tech-badge';
import { skills } from '@/lib/profile';

/**
 * Skills grouped like the credits on a record sleeve: a small label, then the
 * badges. `wide` lays the groups out two across (used on the About page, where
 * the list has the full width to itself).
 */
export default function SkillsList({ wide = false }: { wide?: boolean }) {
    return (
        <dl className={`grid ${wide ? 'gap-x-16 gap-y-6 sm:grid-cols-2' : 'gap-4.5'}`}>
            {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                    <dt className='mb-1.5 font-stretch-[80%] text-[0.9375rem] font-bold text-muted-foreground'>
                        {group}
                    </dt>
                    <dd className='flex flex-wrap gap-1.5'>
                        {items.map((s) => (
                            <TechBadge key={s} name={s} />
                        ))}
                    </dd>
                </div>
            ))}
        </dl>
    );
}
