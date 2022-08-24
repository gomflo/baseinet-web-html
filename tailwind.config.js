/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#feb913",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
