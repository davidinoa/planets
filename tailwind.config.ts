import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss/types/config'

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        mercury: 'var(--color-mercury)',
        venus: 'var(--color-venus)',
        earth: 'var(--color-earth)',
        mars: 'var(--color-mars)',
        uranus: 'var(--color-uranus)',
        neptune: 'var(--color-neptune)',
        saturn: 'var(--color-saturn)',
        jupiter: 'var(--color-jupiter)',
        'midnight-ink': 'var(--color-midnight-ink)',
        'cosmic-slate': '#38384F',
        'lunar-smoke': '#838391',
        'silver-lining': '#D8D8D8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        antonio: ['var(--font-antonio)'],
        spartan: ['var(--font-spartan)'],
      },
    },
  },
  plugins: [],
} satisfies Config
