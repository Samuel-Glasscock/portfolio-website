import Container from '@/app/components/container'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub, SiGmail } from 'react-icons/si'

function SocialLink({
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
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className='inline-flex items-center gap-2 font-semibold transition-colors hover:text-primary'
        >
            {children}
            {label}
            {external && <span className='sr-only'> (opens in a new tab)</span>}
        </a>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();
    const credit = 'underline underline-offset-[3px] transition-colors hover:text-primary';
    return (
        <footer>
            <Container>
                <div className='mt-6 flex flex-wrap justify-between gap-x-8 gap-y-4 border-t-[3px] border-foreground pt-5.5 pb-10 text-[0.9375rem]'>
                    <ul className='flex flex-wrap gap-x-6 gap-y-2'>
                        <li>
                            <SocialLink href='https://github.com/Samuel-Glasscock' label='GitHub'>
                                <SiGithub aria-hidden='true' className='size-4' />
                            </SocialLink>
                        </li>
                        <li>
                            <SocialLink href='https://www.linkedin.com/in/samuel-glasscock/' label='LinkedIn'>
                                <FaLinkedin aria-hidden='true' className='size-4' />
                            </SocialLink>
                        </li>
                        <li>
                            <SocialLink href='mailto:samuel.c.glasscock@gmail.com' label='Email'>
                                <SiGmail aria-hidden='true' className='size-4' />
                            </SocialLink>
                        </li>
                    </ul>
                    <p className='text-muted-foreground'>
                        &copy; {year} Samuel Glasscock. Built with <a href='https://nextjs.org/' className={credit}>Next.js</a> and <a href='https://tailwindcss.com/' className={credit}>Tailwind</a>.
                    </p>
                </div>
            </Container>
        </footer>
    )
}
