/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins, cursive',
        lato:'Lato, cursive'
      }, 
    },
    screens: {
     "mobile":"10px",
      //mobile up to 330px
      'tablet': '330px',
      // => @media (min-width: 640px) { ... }
      'tablet-laptop': '720px',
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
