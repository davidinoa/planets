import { useMotionValue, useScroll, type MotionStyle } from 'framer-motion'
import { useEffect } from 'react'

export default function useScrollAnimation(): MotionStyle {
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
