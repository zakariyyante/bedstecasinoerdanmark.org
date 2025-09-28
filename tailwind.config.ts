import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c7c7ff',
          300: '#a3a3ff',
          400: '#7c7cff',
          500: '#1d1160',
          600: '#1a0e55',
          700: '#170b4a',
          800: '#140840',
          900: '#110535',
        },
        accent: {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00ff88', // Bright green like bedstecasinosdk.com
          600: '#00e677',
          700: '#00cc66',
          800: '#00b355',
          900: '#009944',
        },
        secondary: {
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff7c7',
          300: '#fff0a3',
          400: '#ffe67c',
          500: '#d4af37',
          600: '#c19d2f',
          700: '#ae8b27',
          800: '#9b791f',
          900: '#886717',
        },
        gold: {
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff7c7',
          300: '#fff0a3',
          400: '#ffe67c',
          500: '#d4af37',
          600: '#c19d2f',
          700: '#ae8b27',
          800: '#9b791f',
          900: '#886717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
