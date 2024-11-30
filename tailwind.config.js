/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A0DAD",
        secondary: "#e1f0fc",
        third: "#4888ae",
      },
      fontFamily: {
        iranyekan: ['"iranyekan"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
