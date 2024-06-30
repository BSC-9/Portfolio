/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-300': '#a5b4fc',
        'purple-300': '#c4b5fd',
        'pink-300': '#f9a8d4',
      }
    },
  },
  plugins: [],
}
