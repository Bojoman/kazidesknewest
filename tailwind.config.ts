/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./sections/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F1B59E",
        brand: "#4F1919",
        rose700: "#be123c",
        rose950: "#450a0a",
        gray100: "#f3f4f6",
        deepBlue: "#061448"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
