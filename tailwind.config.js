/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff"
      },
    },
  },
  plugins: [],
}