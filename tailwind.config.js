/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A1128',
          card: '#101F42',
          cardHover: '#162A5A',
          border: '#1E3A70',
          cyan: '#00F0FF',
          cyanDark: '#0891B2',
          blue: '#1D4ED8',
          accent: '#38BDF8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
