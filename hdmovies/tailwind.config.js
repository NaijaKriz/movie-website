/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#080A1A",
        subMain: "#f20000",
        dry: "#0b0f29",
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        drygray: "#e0d5d5",
      },

      /**height */
      height: {
        header: "560px",
        rate: "400px",
      },

      /**font size */
      fontSize: {
        h1: "2.6rem",
      },

      /** screen size */
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

