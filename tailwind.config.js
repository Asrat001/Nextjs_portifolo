/** @type {import('tailwindcss').Config} */
 const {fontFamily} = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
  
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)',...fontFamily.sans],
       
      },
      colors:{
        dark: "#CABBC1",
        light: "#021504",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9",
        h1text:"#62B600" // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
     backgroundImage: {
      circularLight:"repeating-radial-gradient(rgb(0,0,0,0.4) 2px, #f5f5f5 ,5px ,#021504 100px)"
    },
  }

  },
  plugins: [],
}