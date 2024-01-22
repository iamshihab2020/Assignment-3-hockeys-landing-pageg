/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: { manrope: "'Manrope', sans-serif" },
    colors: {
      btnColor: "#FF4240",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

