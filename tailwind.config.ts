import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss/types/config'

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        mercury: '#419EBB',
        venus: '#EDA249',
        earth: '#6D2ED5',
        mars: '#D14C32',
        uranus: '#1EC1A2',
        neptune: '#2D68F0',
        saturn: '#CD5120',
        jupiter: '#D83A34',
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
