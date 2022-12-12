/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage:
         {
           'background': "url('/public/img/background.svg')"
         }
     }
  },
  plugins: [],
}
