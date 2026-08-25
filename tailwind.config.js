/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dhl: {
          yellow: '#FFCC00',
          'yellow-hover': '#E6B800',
          red: '#D40511',
          'red-hover': '#B8040E',
          dark: '#0f172a',
          card: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
