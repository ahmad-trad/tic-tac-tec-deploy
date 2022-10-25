/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: "./src/**/*.{js,jsx,ts,tsx}",
  theme: {
    extend: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      container: {
        center: true,
      },
      colors: {
        bg: {
          DEFAULT: '#f8f9ff',
          card: '#f1f3fa'
        },
        darkbg: {
          DEFAULT: '#20222f',
          card: '#252643',
          dark: '#1d2029'
        },
        facebook: '#1877f2',
        twitter: '#1da1f2',
        youtube: '#ff0000',
        instgram: '#c32aa3',
        maingreen: '#3fac8e'

      }
    },
  },
  plugins: [],
}