/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens:{
        xxs: '380px',
        xs : '480px',
      },
      colors: {
       txt : '#E7F1E4',
       bg : '#285238',
       myP : '#4FBA5A',
       myS: '#012351',
       ac : '#4CCCE6',
      }
    },
  },
  plugins: [require("flowbite/plugin"),
  ],
}
