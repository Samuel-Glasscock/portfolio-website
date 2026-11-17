import Image from 'next/image';
import ButtonLink from '@/app/components/button-link';
import Container from '@/app/components/container';
import TextLink from '@/app/components/text-link';

export default function Hero() {
    return (
        <section>
            <Container>
                <div className='grid items-center gap-x-14 gap-y-8 pt-9 pb-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:pt-13 sm:pb-14'>
                    <div>
                        <h1 className='text-[clamp(2.75rem,7.6vw,5.25rem)] leading-[0.94]'>
                            Samuel Glasscock
                        </h1>
                        <p className='mt-4.5 text-[1.375rem] leading-snug font-semibold'>
                            Software engineer
                        </p>
                        <p className='mt-1 max-w-136 text-muted-foreground'>
                            Web, fintech, automation. Driving efficiency and optimization.
                        </p>
                        <div className='mt-6 flex flex-wrap items-center gap-x-6 gap-y-3'>
                            <ButtonLink href='/projects'>View projects</ButtonLink>
                            <TextLink href='/about'>About me</TextLink>
                        </div>
                    </div>

                    {/* 4:5 frame anchored to the bottom of the photo: only the empty space above the head is cropped */}
                    <Image
                        src='/headshot.jpeg'
                        alt='Samuel Glasscock, arms crossed, under the arches of a colonnade'
                        width={800}
                        height={1200}
                        sizes='(min-width: 640px) 240px, 176px'
                        preload
                        className='aspect-[4/5] h-auto w-44 object-cover object-bottom sm:w-[clamp(11rem,21vw,15rem)]'
                    />
                </div>
            </Container>
        </section>
    );
}
