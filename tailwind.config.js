/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      screens: {
        'sm':'300px',
        'md':'750px',
        'lg':'1000px'
      }
    }
  },
  plugins: [],
}