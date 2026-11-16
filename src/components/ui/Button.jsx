export default function Button({
  as: Tag = 'a',
  href,
  type,
  children,
  variant = 'gold',
  className = '',
  onClick,
}) {
  const styles = {
    gold:
      'bg-gold text-charcoal hover:bg-gold-soft',
    outline:
      'border border-gold/80 bg-transparent text-ivory hover:bg-gold hover:text-charcoal',
    dark:
      'bg-aubergine text-ivory hover:bg-aubergine-deep',
  }

  return (
    <Tag
      href={href}
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-[var(--radius-md)] px-7 py-3 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Tag>
  )
}
