import { AnimatePresence, motion } from 'framer-motion'
import { useLayoutEffect } from 'react'
import ChevronIcon from '~/assets/icon-chevron.svg'
import { PLANETS } from '~/lib/data'
import { mergeClassNames } from '~/lib/utils'

type MobileMenuProps = {
  id: string
  isOpen: boolean
  className?: string
}

const planetBgColors = {
  mercury: 'bg-mercury',
  venus: 'bg-venus',
  earth: 'bg-earth',
  mars: 'bg-mars',
  jupiter: 'bg-jupiter',
  saturn: 'bg-saturn',
  uranus: 'bg-uranus',
  neptune: 'bg-neptune',
}

export default function MobileMenu({ id, isOpen, className }: MobileMenuProps) {
  useLockBodyScroll(isOpen)

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.ul
          id={id}
          animate="enter"
          initial="exit"
          exit="exit"
          variants={{
            enter: {
              height: 'calc(100vh - 68px)',
              paddingBlock: '1.5rem',
              transition: {
                duration: 0.3,
                easings: 'easeOut',
              },
            },
            exit: {
              height: 0,
              paddingBlock: 0,
              transition: {
                duration: 0.3,
                easings: 'easeIn',
              },
            },
          }}
          className={mergeClassNames(
            'content-grid full-width w-full auto-rows-max divide-y divide-white/10 overflow-auto bg-midnight-ink uppercase text-white md:hidden',
            className,
          )}
        >
          {PLANETS.map((planet) => {
            return (
              <li key={planet.id}>
                <a
                  className="flex items-center px-2 py-5 hover:opacity-70"
                  href={`/${planet.id}`}
                >
                  <div
                    className={`${planetBgColors[planet.id]} mr-4 size-5 rounded-full`}
                  />
                  <span className="grow text-[0.9375rem] font-bold leading-relaxed tracking-[1.365px]">
                    {planet.name}
                  </span>
                  <ChevronIcon />
                </a>
              </li>
            )
          })}
        </motion.ul>
      ) : null}
    </AnimatePresence>
  )
}

function useLockBodyScroll(isActive: boolean) {
  useLayoutEffect(() => {
    if (!isActive) return
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isActive])
}
