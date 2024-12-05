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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #00484c, #00484c, #00484c, #00484c, #00484c, #005052, #005958, #00615e, #007468, #00886e, #009c6f, #00af6b);',
      },
      boxShadow: {
        'sm': '0px 7px 13px 2px rgb(38, 38, 38)', 
        'xs' : '-0px 5px 10px 1px rgb(38, 38, 38)',
        'xxs' : '1px 4px 10px 1px rgb(38, 38, 38)',
        'micro' : '1px 1px 4px rgb(38, 38, 38)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens:{
        xxs: '380px',
        xs : '480px',
        nav: '830px',
      },
      width:{
        '80%' : '80%',
        '98%' : '98%',
        '45%' : '43%',
        '50vh' : '35vw',
        '70vh' : '85vw',
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
      strategy: 'class',
    }),
    require("flowbite/plugin"),
    flowbite.plugin(),
    require("@material-tailwind/react/utils/withMT"),
    require('daisyui'),
  ],
}
