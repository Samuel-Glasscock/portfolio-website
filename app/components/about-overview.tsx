import Container from '@/app/components/container';
import Link from 'next/link';

import {skills} from '@/lib/profile';

export default function AboutPreview() {
    return (
        <section className='py-10'>
            <Container>
                <header className='mb-6 flex items-end justify-between'>
                    <h2> 
                        About Me - At a Glance
                    </h2>
                    <Link href='/about' className='rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90'>
                        View My full About Me &#10132;
                    </Link>
                </header>

                {/* General Preview */}
                <div className='rounded-lg border border-border p-4'>
                    <h3>
                        Overview
                    </h3>
                    <p className='mt-2'>
                        I&apos;m currently a 4th year Computer Science student at the University of Virginia with a
                         passion for Software Development and lifecycle, Web Development, Financial technologies, 
                         and Process Automation/Optimization. My professional and academic journey so far has inspired 
                         my interest in building impactful solutions where the fields of Computer Science and Finance intersect.
                       
                    </p>
                </div>
                {/* Skills */}
                <div className='mt-6 rounded-lg border border-border p-4'>
                    <h3>
                        Skills
                    </h3>
                    <div className='grid gap-3 sm:grid-cols-2'>
                        {Object.entries(skills).map(([group, items]) => (
                            <div key={group}>
                                <div className='text-s font-semibold text-muted-foreground'>{group}</div>
                                <div className='mt-1 flex flex-wrap gap-2'>
                                    {items.map((s) => (
                                        <span key={s} className='rounded-md bg-accent/30 px-2 py-0.5 text-s text-accent-foreground/90'>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}