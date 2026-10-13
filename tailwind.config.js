/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        italiana: ['"Italiana"', 'serif'],
        sans: ['"Montserrat"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: '#df3b68',
          'pink-hover': '#c82855',
          'pink-light': '#ffebf0',
          'pink-subtle': '#fff0f3',
          'pink-border': '#f28ba9',
          'pink-glow': '#ffd6e0',
          dark: '#111111',
          charcoal: '#222222',
          muted: '#666666',
        }
      },
      boxShadow: {
        'mockup': '0 25px 60px -15px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.08)',
        'soft-glow': '0 10px 30px -5px rgba(223, 59, 104, 0.15)',
      }
    },
  },
  plugins: [],
}
