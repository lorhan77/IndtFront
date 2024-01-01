/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to bottom, rgba(88, 213, 211, 0.9), rgba(1, 143, 140, 0.9)), url('https://dspncdn.com/a1/media/692x/4d/b4/73/4db4731181850f4161320b45970eda4c.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

