/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customGreen: "#40773b",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
