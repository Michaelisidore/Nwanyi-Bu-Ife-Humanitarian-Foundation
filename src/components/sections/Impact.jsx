import { HeartHandshake, MapPinned, Sparkles, Users } from 'lucide-react'
import { impactItems } from '../../data/site'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = [MapPinned, HeartHandshake, Sparkles, Users]

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we are building"
            title="Our Impact"
            align="center"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-charcoal/80">
            Verified figures will appear here once they are supplied. Until then,
            these measures remain placeholders.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={item.label} delay={index * 0.08}>
                <article className="h-full rounded-[var(--radius-lg)] border border-aubergine/8 bg-ivory px-6 py-8 text-center">
                  <div className="mx-auto mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-aubergine">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <p className="font-serif text-5xl font-semibold text-aubergine">{item.value}</p>
                  <h3 className="mt-3 text-sm tracking-[0.12em] text-charcoal uppercase">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-xs text-sage">{item.note}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
