module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Montserrat-Bold", "sans"],
      },
    },
  },
};
