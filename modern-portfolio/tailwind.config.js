/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/main.js"
  ],
  theme: {
    extend: {
      container: {
        padding: '20px',
        margin: '0 auto',
      }
    },
  },
  plugins: [],
}

