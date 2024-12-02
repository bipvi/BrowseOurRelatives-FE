import flowbite from "flowbite-react/tailwind";

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
      boxShadow: {
        'sm': '-8px 8px 10px 2px rgba(15,15,15,1)', // Ombra più allungata
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens:{
        xxs: '380px',
        xs : '480px',
        nav: '815px',
      },
      width:{
        '80%' : '80%',
        '45%' : '43%',
        '50vh' : '50vh',
        '70vh' : '70vh',
        'almost-screen' : '99vw',
      },
      colors: {
       txt : '#E7F1E4',
       bg : '#00484c',
       myP : '#00af6b',
       myS: '#012351',
       ac : '#16869c',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
    require("flowbite/plugin"),
    flowbite.plugin(),
  ],
}
