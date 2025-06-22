/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-dark': '#000000',
        'theme-navy': '#0A192F',
        'theme-blue': '#112240',
        'theme-light': '#1E3A8A',
        'theme-text': '#E2E8F0',
        'theme-text-secondary': '#94A3B8'
      },
      backgroundColor: {
        'theme-gradient': 'linear-gradient(to right, #000000, #0A192F)'
      }
    },
  },
  plugins: [],
};