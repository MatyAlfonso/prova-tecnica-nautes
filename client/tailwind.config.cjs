/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: 'currentColor',
      white: {
        100: "#FFFFFF",
        200: "#FAFBFC",
      },
      gray: {
        100: "#E6EBEF",
        200: "#DEE1E2",
        300: "#CDD2D6",
        400: "#CFD8E0",
        500: "#95A1AC",
        600: "#616E79",
        700: "#2A3948",
      },
      black: "#000000",
      red: {
        100: "#BE0010",
        200: "#A10C0F",
        300: "#6A0C0E",
      },
      cyan: "#4EADC1",
    },
    fontFamily: {
      libre: ['"Libre Franklin"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
