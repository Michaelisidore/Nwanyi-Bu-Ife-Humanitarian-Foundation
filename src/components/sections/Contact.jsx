import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '../../data/site'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const details = [
  { icon: Mail, label: 'Email Address', value: contact.email, href: contact.emailHref },
  { icon: Phone, label: 'Phone Number', value: contact.phone, href: contact.phoneHref },
  { icon: MapPin, label: 'Office Address', value: contact.address },
]

export default function Contact() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="bg-ivory py-24 sm:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2">
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
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 inline-block text-charcoal transition-colors hover:text-aubergine"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-charcoal">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-lg)] border border-aubergine/8 bg-white p-6 sm:p-8">
              <p className="text-[0.72rem] font-medium tracking-[0.28em] text-gold uppercase">
                Support our work
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-aubergine sm:text-4xl">
                Become a Sponsor
              </h3>
              <span className="gold-rule mt-5 block" aria-hidden="true" />
              <div className="mt-8">
                <Button
                  as="button"
                  type="button"
                  variant="dark"
                  aria-expanded={open}
                  onClick={() => setOpen(true)}
                >
                  Become a Sponsor
                </Button>
              </div>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="sponsor-message"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 leading-relaxed text-charcoal/85">{contact.sponsorMessage}</p>
                    <div className="pt-6">
                      <Button
                        href={contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        Contact Us on WhatsApp
                      </Button>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
