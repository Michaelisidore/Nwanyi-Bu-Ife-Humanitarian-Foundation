export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  light = false,
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p
          className={`text-[0.72rem] font-medium uppercase tracking-[0.28em] ${
            light ? 'text-gold-soft' : 'text-gold'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-4xl leading-[1.15] font-semibold tracking-tight sm:text-5xl ${
          light ? 'text-ivory' : 'text-aubergine'
        }`}
      >
        {title}
      </h2>
      <span className="gold-rule" aria-hidden="true" />
    </div>
  )
}
