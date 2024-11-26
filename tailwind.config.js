const flowbite = require("flowbite/plugin");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
  ],
}
