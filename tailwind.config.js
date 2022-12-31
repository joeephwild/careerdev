/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ClashDisplay-Bold": ["ClashDisplay-Bold"],
        "ClashDisplay-Regular": ["ClashDisplay-Regular"],
        "ClashDisplay-Light": ["ClashDisplay-Light"]
      } 
    },
  },
  plugins: [],
}
