import { motion } from 'framer-motion'
import type { PLANETS } from '~/lib/data'

type Planet = (typeof PLANETS)[number]

export default function AnimatedPlanetLink({ planet }: { planet: Planet }) {
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
