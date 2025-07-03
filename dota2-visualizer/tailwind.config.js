/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dota: {
          bg: '#0a0b0e',
          primary: '#1a1b23',
          secondary: '#2a2b37',
          accent: '#ff6b35',
          gold: '#d4af37',
          green: '#4ade80',
          red: '#ef4444',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}