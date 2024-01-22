/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: { manrope: "'Manrope', sans-serif" },
    colors: {
      btnColor: "#FF4240",
      para: "rgba(19, 19, 24, 0.60)",
      real: "#131318",
      borderBgm: "rgba(19, 19, 24, 0.20)",
      imgBg: "rgba(19, 19, 24, 0.5)",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

