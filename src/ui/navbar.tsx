'use client'

import { useState } from 'react'
import { mergeClassNames } from '~/lib/utils'
import FocusTrap from './focus-trap'
import MobileMenu from './mobile-menu'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuId = 'mobile-menu'

  return (
    <FocusTrap active={isMenuOpen}>
      <header className="content-grid">
        <nav className="flex items-center justify-between gap-4 py-4">
          <a
            href="/"
            className="font-antonio text-[1.75rem] uppercase leading-tight tracking-[-1.05px]"
          >
            The Planets
          </a>
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
      </header>
    </FocusTrap>
  )
}
