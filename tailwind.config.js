/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15120f",
        paper: "#f1ece3",
        rust: "#b64c20",
        amber: "#f4a949",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
