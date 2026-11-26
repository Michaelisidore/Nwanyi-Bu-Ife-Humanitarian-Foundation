import { about } from '../../data/site'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function Prose({ paragraphs, className = '' }) {
  return (
    <div className={`space-y-5 text-base leading-relaxed text-charcoal/85 sm:text-lg ${className}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Who we are" title="About Us" />
          <p className="mt-8 max-w-3xl font-serif text-3xl leading-snug text-aubergine sm:text-4xl">
            {about.tagline}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <h3 className="font-serif text-3xl font-semibold text-aubergine">Who We Are</h3>
            <span className="gold-rule mt-5 block" aria-hidden="true" />
            <Prose paragraphs={about.whoWeAre} className="mt-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-[var(--radius-lg)] bg-ivory-dark shadow-[var(--shadow-soft)]">
              <img
                src={about.leadImage.src}
                alt={about.leadImage.alt}
                className={`aspect-[4/5] w-full object-cover ${about.leadImage.position}`}
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-20 grid items-start gap-12 border-t border-gold/30 pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <p className="text-[0.72rem] font-medium tracking-[0.28em] text-gold uppercase">
              {about.story.eyebrow}
            </p>
            <h3 className="mt-4 max-w-xl font-serif text-3xl leading-snug font-semibold text-aubergine sm:text-4xl">
              {about.story.title}
            </h3>
            <span className="gold-rule mt-5 block" aria-hidden="true" />
            <Prose paragraphs={about.story.paragraphs} className="mt-6" />
          </Reveal>
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <figure className="overflow-hidden rounded-[var(--radius-lg)] bg-ivory-dark shadow-[var(--shadow-soft)]">
              <img
                src={about.storyImage.src}
                alt={about.storyImage.alt}
                className={`aspect-[3/4] w-full object-cover ${about.storyImage.position}`}
              />
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 border-t border-gold/30 pt-16">
            <h3 className="font-serif text-3xl font-semibold text-aubergine sm:text-4xl">Our Mission</h3>
            <span className="gold-rule mt-5 block" aria-hidden="true" />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-charcoal/85 sm:text-lg">
              {about.mission.intro}
            </p>
            <p className="mt-8 text-sm tracking-[0.16em] text-sage uppercase">We are committed to</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {about.mission.commitments.map((item) => (
                <li
                  key={item}
                  className="rounded-[var(--radius-lg)] border border-aubergine/8 bg-white px-5 py-5 leading-relaxed text-charcoal/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t border-gold/30 pt-16">
            <h3 className="font-serif text-3xl font-semibold text-aubergine sm:text-4xl">Our Vision</h3>
            <span className="gold-rule mt-5 block" aria-hidden="true" />
            <Prose paragraphs={about.vision} className="mt-6 max-w-3xl" />
          </div>
        </Reveal>

        <div className="mt-20 border-t border-gold/30 pt-16">
          <Reveal>
            <h3 className="font-serif text-3xl font-semibold text-aubergine sm:text-4xl">Our Core Values</h3>
            <span className="gold-rule mt-5 block" aria-hidden="true" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <article className="h-full rounded-[var(--radius-lg)] border border-aubergine/8 bg-white px-6 py-7">
                  <h4 className="font-serif text-2xl font-semibold text-aubergine">{value.title}</h4>
                  <p className="mt-3 leading-relaxed text-charcoal/85">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-20 rounded-[var(--radius-lg)] bg-aubergine px-7 py-10 text-ivory sm:px-10 sm:py-12">
            <h3 className="font-serif text-3xl font-semibold sm:text-4xl">Our Commitment</h3>
            <span className="gold-rule mt-5 block" aria-hidden="true" />
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-ivory/88 sm:text-lg">
              {about.commitment.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 font-serif text-2xl text-gold-soft sm:text-3xl">{about.commitmentClose}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {about.gallery.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.06}>
              <figure className="overflow-hidden rounded-[var(--radius-lg)] bg-ivory-dark">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`aspect-[3/4] w-full object-cover sm:aspect-[4/5] ${image.position}`}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
