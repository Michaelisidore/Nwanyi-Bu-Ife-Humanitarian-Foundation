import { founder } from '../../data/site'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

export default function Founder() {
  return (
    <section id="founder" className="bg-ivory py-24 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <Reveal>
            <figure className="relative mx-auto w-full max-w-md lg:sticky lg:top-28">
              <div className="absolute -inset-3 rounded-[18px] border border-gold/50" aria-hidden="true" />
              <img
                src={founder.portrait}
                alt={founder.portraitAlt}
                className="relative aspect-[3/4] w-full rounded-[14px] object-cover object-[50%_18%] shadow-[var(--shadow-soft)]"
              />
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[0.72rem] font-medium tracking-[0.28em] text-gold uppercase">
                Leadership
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight font-semibold text-aubergine sm:text-5xl">
                About the Founder
              </h2>
              <span className="gold-rule mt-5 block" aria-hidden="true" />
              <p className="mt-6 font-serif text-3xl leading-tight text-aubergine sm:text-4xl">
                {founder.name}
              </p>
              <p className="mt-2 text-sm tracking-[0.18em] text-sage uppercase">
                {founder.role}
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/85 sm:text-lg">
                {founder.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {founder.sections.map((section, index) => (
              <Reveal key={section.title} delay={0.08 * (index + 1)}>
                <div className="mt-12 border-t border-gold/30 pt-10">
                  <h3 className="font-serif text-3xl font-semibold text-aubergine">
                    {section.title}
                  </h3>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 sm:text-lg">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
