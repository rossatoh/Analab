/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          cream: '#f4ebd0',
          paper: '#e8dec0',
          green: {
            light: '#4a7c59',
            DEFAULT: '#2d5a27', // The main strong green
            dark: '#1a3c1b',
          },
          brown: {
            light: '#8c7b5b',
            DEFAULT: '#5d4037',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        mono: ['"Courier Prime"', 'monospace'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
      }
    }
  },
  plugins: [],
}