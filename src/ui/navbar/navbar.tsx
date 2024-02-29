'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PLANETS } from '~/lib/data'
import { mergeClassNames } from '~/lib/utils'
import FocusTrap from './focus-trap'
import MobileMenu from './mobile-menu'
import AnimatedPlanetLink from './planet-link'
import useScrollAnimation from './use-scroll-animation'

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
