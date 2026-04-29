/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          'red-hover': '#C11119',
          black: '#141414',
          'dark-gray': '#333',
          'gray': '#737373',
          'light-gray': '#8c8c8c',
        }
      },
      fontFamily: {
        netflix: ['Netflix Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'login-gradient': 'linear-gradient(to bottom, rgba(20, 11, 11, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
      }
    },
  },
  plugins: [],
}
