/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          700: '#4A4556',
          800: '#363447',
          900: '#292738',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'grow-full-height': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        }
      },
      animation: {
        'grow-full-height': 'grow-full-height 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}
