import Container from '@/app/components/container';
import SectionHeading from '@/app/components/section-heading';
import SkillsList from '@/app/components/skills-list';
import TextLink from '@/app/components/text-link';

export default function AboutPreview() {
    return (
        <Container>
            {/* Two columns from md up: the essay gets 7/12 of the width, the skills "credits" 5/12 */}
            <div className='grid gap-x-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-16'>
                <section className='pb-14'>
                    <SectionHeading title='About' />
                    <p className='max-w-[62ch]'>
                        Welcome to my website! I&apos;m currently a 4th year Computer Science student at the University of Virginia with a
                        passion for Software Development and Financial technologies. My professional and academic journey so far has inspired
                        my interest in building impactful solutions where the fields of Computer Science and Finance intersect. Beyond the
                        classroom, I enjoy tackling projects that blend creativity with problem solving, whether that means streamlining workflows,
                        exploring emerging technologies, or developing tools that make life a little easier. Alongside my technical work, I value
                        teamwork, mentorships, and continuous growth, all of which I carry into both my academic and personal projects. I&apos;m
                        always eager to learn, collaborate, and share my work, so feel free to explore and get to know me better!
                    </p>
                    <TextLink href='/about' className='mt-5 inline-block'>More about me</TextLink>
                </section>

                <section className='pb-14'>
                    <SectionHeading title='Skills' />
                    <SkillsList />
                </section>
            </div>
        </Container>
    );
}
