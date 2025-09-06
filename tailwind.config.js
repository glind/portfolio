/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0658A1',        // Buildly blue
        'primary-dark': '#06427A',
        secondary: '#F9943B',      // Buildly orange
        accent: '#10B981',
        'accent-dark': '#047857'
      }
    }
  },
  plugins: [],
}
