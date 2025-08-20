import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='mt-8 grid gap-6 sm:grid-cols-[auto,1fr] sm:items-center'>
            {/* Headshot */}
            <div className='justify-self-start'>
                <Image
                    src='/headshot.jpeg'
                    alt='Professional headshot of Samuel Glasscock'
                    width={128}
                    height={128}
                    priority
                    className='h-32 w-32 rounded-full ring-2 ring-border object-cover'
                />
            </div>

            {/* Headline */}
            <div>
                <h1 className='text-4xl font-semibold tracking-tight'>Hi, I&apos;m Samuel Glasscock</h1>
                <p className='mt-2 text-lg text-muted-foreground'>
                    Software engineer. I build reliable and clean systems.
                </p>
                <div className="mt-4 flex gap-3">
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
        </section>
    )
}