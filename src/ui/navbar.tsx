'use client'

import {
  motion,
  useMotionValue,
  useScroll,
  type MotionStyle,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { PLANETS } from '~/lib/data'
import { mergeClassNames } from '~/lib/utils'
import FocusTrap from './focus-trap'
import MobileMenu from './mobile-menu'

const mobileMenuId = 'mobile-menu'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const motionStyle = useScrollAnimation()

  return (
    <motion.header
      style={motionStyle}
      className="fixed top-0 w-full transition-all duration-300 ease-in-out"
    >
      <FocusTrap active={isMenuOpen} className="content-grid">
        <nav className="flex items-center justify-between gap-4 py-4 md:gap-6 md:py-6 md:max-lg:flex-col">
          <a
            href="/"
            className="font-antonio text-[1.75rem] uppercase leading-tight tracking-[-1.05px]"
          >
            The Planets
          </a>
          <ul className="hidden gap-8 md:flex md:items-center">
            {PLANETS.map((planet) => (
              <li key={planet.id}>
                <AnimatedPlanetLink planet={planet} />
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="toggle menu"
            aria-owns={mobileMenuId}
            aria-expanded={isMenuOpen}
            className="outline-offset-4 md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <div
              className={mergeClassNames(
                isMenuOpen ? 'open' : 'closed',
                'relative h-[1.125rem] w-6',
              )}
            >
              <div
                className={mergeClassNames(
                  'absolute h-[3px] bg-white duration-300',
                  isMenuOpen ? 'left-1/2 top-[7px] w-0' : 'left-0 top-0 w-full',
                )}
              />
              <div
                className={mergeClassNames(
                  isMenuOpen && 'rotate-45',
                  'absolute top-[7px] h-[3px] w-full bg-white duration-300',
                )}
              />
              <div
                className={mergeClassNames(
                  isMenuOpen && '-rotate-45',
                  'absolute top-[7px] h-[3px] w-full bg-white duration-300',
                )}
              />
              <div
                className={mergeClassNames(
                  'absolute h-[3px] bg-white duration-300',
                  isMenuOpen
                    ? 'left-1/2 top-[7px] w-0'
                    : 'left-0 top-[14px] w-full',
                )}
              />
            </div>
          </button>
        </nav>
        <hr className="full-width | border-white/20" />
        <MobileMenu id={mobileMenuId} isOpen={isMenuOpen} />
      </FocusTrap>
    </motion.header>
  )
}

function useScrollAnimation(): MotionStyle {
  const { scrollY } = useScroll()
  const y = useMotionValue('0')
  const animationThreshold = 10

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const previous = scrollY.getPrevious() ?? 0
      const diff = current - previous
      if (Math.abs(diff) < animationThreshold) return
      y.set(diff > 0 ? '-100%' : '0')
    })
  }, [scrollY, y])

  return { y } as const
}

type Planet = (typeof PLANETS)[number]

function AnimatedPlanetLink({ planet }: { planet: Planet }) {
  return (
    <motion.a
      href={`/${planet.id}`}
      initial="idle"
      whileHover="hover"
      variants={{
        hover: { opacity: 0.7, transition: { duration: 0.3 } },
      }}
      className="relative inline-block text-[0.6875rem] font-bold uppercase leading-[2.15] tracking-[1px]"
    >
      {planet.name}
      <svg height="4" width="100%" className="absolute">
        <motion.path
          d="M0,1 L100,1"
          strokeWidth="4"
          variants={{
            idle: {
              pathLength: 0,
              transition: { duration: 0.1 },
            },
            hover: {
              pathLength: 1,
              transition: { duration: 0.5 },
              stroke: `var(--color-${planet.id})`,
            },
          }}
        />
      </svg>
    </motion.a>
  )
}
