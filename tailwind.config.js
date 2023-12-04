/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#DDD0C8',
        secondary: '#323232'
      },
      fontFamily: {
        open: ['Open Sans']
      }
    },
  },
  plugins: [],
}

