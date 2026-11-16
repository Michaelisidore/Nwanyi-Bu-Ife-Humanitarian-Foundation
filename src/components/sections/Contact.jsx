import { Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '../../data/site'
import ContactForm from '../contact/ContactForm'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const details = [
  { icon: Mail, label: 'Email', value: contact.email },
  { icon: Phone, label: 'Telephone', value: contact.phone },
  { icon: MapPin, label: 'Address', value: contact.address },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="We welcome correspondence" title="Contact Us" />
            <ul className="mt-10 space-y-6">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-aubergine">
                    <item.icon size={16} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[0.68rem] tracking-[0.2em] text-gold uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-charcoal">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-lg)] border border-aubergine/8 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
