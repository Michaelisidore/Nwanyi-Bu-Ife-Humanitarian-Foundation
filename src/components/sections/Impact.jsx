import { GraduationCap, HandHeart, HeartPulse, Sprout, Users, Utensils } from 'lucide-react'
import { impactItems } from '../../data/site'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = [GraduationCap, HeartPulse, HandHeart, Utensils, Sprout, Users]

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="How we serve" title="Our Impact" align="center" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-charcoal/80">
            Our humanitarian work is carried out through practical support for people
            and communities who need it most.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {impactItems.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[var(--radius-lg)] border border-aubergine/8 bg-ivory px-6 py-8">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-aubergine">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-aubergine">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/85">{item.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
