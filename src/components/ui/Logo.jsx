import { org } from '../../data/site'

export default function Logo({ inverted = false, compact = false }) {
  return (
    <a href="#home" className="group flex min-w-0 items-center gap-3">
      <img
        src="/images/logo.png"
        alt=""
        width={compact ? 40 : 48}
        height={compact ? 40 : 48}
        className={`${compact ? 'h-10 w-10' : 'h-12 w-12'} rounded-full bg-ivory object-cover ring-1 ring-gold/70`}
      />
      <span className="min-w-0">
        <span
          className={`block truncate font-serif text-[1.05rem] leading-tight font-semibold tracking-wide sm:text-lg ${
            inverted ? 'text-ivory' : 'text-aubergine'
          }`}
        >
          {org.name}
        </span>
        <span
          className={`hidden text-[0.62rem] tracking-[0.16em] uppercase sm:block ${
            inverted ? 'text-ivory/70' : 'text-aubergine/55'
          }`}
        >
          {org.descriptor}
        </span>
      </span>
    </a>
  )
}
