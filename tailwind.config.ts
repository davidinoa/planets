import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss/types/config'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'midnight-ink': 'var(--color-midnight-ink)',
        'cosmic-slate': '#38384F',
        'lunar-smoke': '#838391',
        'skyline-blue': '#419EBB',
        'aqua-dream': '#1EC1A2',
        'royal-azure': '#2D68F0',
        'purple-mystery': '#6D2ED5',
        'terra-cotta': '#CD5120',
        'sunset-coral': '#D14C32',
        'firebrick-red': '#D83A34',
        'silver-lining': '#D8D8D8',
        'golden-saffron': '#EDA249',
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
