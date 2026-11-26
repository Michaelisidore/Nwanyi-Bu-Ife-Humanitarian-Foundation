import { contact, navLinks, org } from '../../data/site'
import Logo from '../ui/Logo'
import Container from '../ui/Container'

function Icon({ children, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const socialIcons = {
  Facebook: (props) => (
    <Icon {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Icon>
  ),
  Instagram: (props) => (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </Icon>
  ),
  LinkedIn: (props) => (
    <Icon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  ),
  X: (props) => (
    <svg width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.7 10.3 22 2h-2.2l-6.3 7.2L8.4 2H2l7.7 11.1L2 22h2.2l6.8-7.8L15.6 22H22l-7.3-11.7Z" />
    </svg>
  ),
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-aubergine text-ivory">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo inverted />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/75">
              {org.descriptionPlaceholder}
            </p>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-medium tracking-[0.24em] text-gold uppercase">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-medium tracking-[0.24em] text-gold uppercase">
              Contact
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-ivory/80">
              <p>
                <a href={contact.emailHref} className="transition-colors hover:text-gold">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={contact.phoneHref} className="transition-colors hover:text-gold">
                  {contact.phone}
                </a>
              </p>
              <p>{contact.address}</p>
            </address>
            {contact.social.length > 0 ? (
            <ul className="mt-6 flex items-center gap-3">
              {contact.social.map((item) => {
                const Icon = socialIcons[item.name]
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
                    >
                      {Icon ? <Icon size={16} strokeWidth={1.6} /> : item.name}
                    </a>
                  </li>
                )
              })}
            </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-6 text-xs tracking-wide text-ivory/55">
          <p>
            © {year} {org.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
