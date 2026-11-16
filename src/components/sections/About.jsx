import { aboutGallery } from '../../data/site'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Who we are" title="About Us" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/85">
              Insert about here
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-sage">
              Official photographs from outreach activities will replace these
              gallery placeholders.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 auto-rows-[9.5rem] gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:auto-rows-[13.5rem]">
              {aboutGallery.map((image) => (
                <figure
                  key={image.src}
                  className={`relative overflow-hidden rounded-[var(--radius-lg)] bg-ivory-dark ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
