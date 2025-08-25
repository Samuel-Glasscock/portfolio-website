import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/container';

export default function Hero() {
    return (
        <section className='pt-1 pb-1'>
            <Container>
                {/* Headline */}
                <div>
                    <h1 className='text-balance text-4xl font-semibold tracking-tight sm:text-5xl'>
                        Hi, I&apos;m Samuel Glasscock
                    </h1>
                    <p className='mt-2 text-lg text-muted-foreground'>
                        Software Engineer | Web &#9679; Fintech &#9679; Automation | Driving efficiency and optimization.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <Link
                            href="/projects"
                            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
                        >
                            View projects
                        </Link>
                        <Link
                            href="/about"
                            className="rounded-lg border border-border px-4 py-2 hover:bg-muted"
                        >
                            About me
                        </Link>
                    </div>
                </div>

                {/* Headshot */}
                <div className='mt-8 flex justify-center'>
                    <Image
                        src='/headshot.jpeg'
                        alt='Professional headshot of Samuel Glasscock'
                        width={320}
                        height={320}
                        priority
                        className='h-64 w-64 rounded-full ring-2 ring-border object-cover sm:h-76 sm:w-76 md:h-84 md:w-84'
                    />
                </div>
                <div className='mt-10 border-t border-border/50'></div>
            </Container>
        </section>
    );
}