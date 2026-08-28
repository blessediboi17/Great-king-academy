/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0057A8",
          darkBlue: "#063B70",
          red: "#D62828",
          gold: "#F4C542",
          lightBg: "#F5F8FC",
          darkText: "#172033",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
