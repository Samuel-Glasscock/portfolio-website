import Container from '@/app/components/container'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

function SocialIcon({
    href, 
    label, 
    children,
} : {
    href: string,
    label: string,
    children: React.ReactNode;
}) {
    const external = href.startsWith('http');
    return (
        <Link
            href={href}
            aria-label={label}
            title={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className='inline-flex items-center justify-center rounded-md border border-border bg-muted/60 p-2 hover:bg-muted'
        >
        {children}
        <span className='sr-only'>{label}</span>
        </Link>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='border-t border-border/60 bg-background/8- backdrop-blur'>
            <Container>
                <div className='py-4 grid gap-6 sm:grid-cols-[1fr,auto] items-start'>
                    {/* Brand, tagline, socials */}
                    <div>
                        {/* <p className='font-medium'>Samuel Glasscock</p>
                        <p className='mt-1 text-sm text-muted-foreground'>efficient web systems * fintech tools * automation</p> */}
                        <div className='mt-3 flex items-center gap-2'>
                            <SocialIcon href='https://github.com/Samuel-Glasscock' label='GitHub'>
                                <SiGithub className='h-5 w-5' />
                            </SocialIcon>
                            <SocialIcon href='https://www.linkedin.com/in/samuel-glasscock/' label='LinkedIn'>
                                <SiLinkedin className='h-5 w-5' />
                            </SocialIcon>
                            <SocialIcon href='mailto:samuel.c.glasscock@gmail.com' label='Email'>
                                <SiGmail className='h-5 w-5' />
                            </SocialIcon>
                        </div>
                    </div>
                </div>
                <div className='mb-5 flex items-center justify-between text-sm text-muted-foreground'>
                    <span>&copy; {year} Samuel Glasscock</span>
                    <span>Built with <a href='https://nextjs.org/'>Next.js</a> and <a href='https://tailwindcss.com/'>Tailwind</a></span>
                </div>
            </Container>
        </footer>
    )
}