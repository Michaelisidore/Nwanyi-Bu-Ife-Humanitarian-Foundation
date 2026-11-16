import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, org } from '../../data/site'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  const go = useCallback(
    (direction) => {
      setIndex((current) => (current + direction + heroSlides.length) % heroSlides.length)
    },
    [],
  )

  useEffect(() => {
    if (reduce) return undefined
    const timer = setInterval(() => go(1), 6500)
    return () => clearInterval(timer)
  }, [go, reduce, index])

  const slide = heroSlides[index]

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-aubergine">
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className={`absolute inset-0 h-full w-full object-cover ${reduce ? '' : 'ken-burns'}`}
        />
      </AnimatePresence>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,39,37,0.18)_0%,rgba(69,36,61,0.22)_38%,rgba(41,39,37,0.72)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-24 pt-32 sm:pb-28">
        <p className="max-w-xl text-[0.72rem] font-medium tracking-[0.16em] text-gold uppercase sm:tracking-[0.22em]">
          {org.legalName}
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-[2.7rem] leading-[1.08] font-semibold text-ivory sm:text-6xl lg:text-7xl">
          Changing lives through compassion, empowerment and opportunity.
        </h1>
        <p className="mt-6 max-w-xl text-base text-ivory/85 sm:text-lg">
          {org.tagline}
        </p>
        <div className="mt-10">
          <Button href="#about">Discover Our Mission</Button>
        </div>
      </Container>

      <div className="absolute right-6 bottom-8 left-6 z-10 mx-auto flex max-w-6xl items-center justify-between sm:right-8 sm:left-8 lg:right-10 lg:left-10">
        <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-10 bg-gold' : 'w-4 bg-ivory/45 hover:bg-ivory/70'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous photograph"
            onClick={() => go(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next photograph"
            onClick={() => go(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
