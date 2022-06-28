const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  // purge: ['./src/**/*.{js, jsx,ts, tsx}', './public/index.html'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darrkmode: false,
  theme: {
    extend: {
      margin: {

      },
      spacing: {
        50: "12.5em",
        auto: "auto",
      },
      colors: {
        primaary: "#202225",
        secondary: "#5865f2",
        gray: colors.gray,
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
          none: "none",
          inherit: "inherit",
        },
      },
      backgroundImage: {
        place: "url('/src/assets/images/hotelia.jpg')",
      },
      height: {
        100: "30rem",
        76: "25em",
        20: "20%",
        500: "500px",
        800: "80%",
        900: "90%",
        850: "85%",
        200: "20%",
        inherit: "inherit",
        half: "55%",
      },
      width: {
        "half1/2": "50%",
        700: "70%",
        "smallW": "20em",
        breadth100: "100%",
        346: "356px",
        inherit: "inherit",
        800: "80%",
        900: "90",
        200: "20%",
        half: "43%",
        30: "100px",
        remaining: "57%"
      },
      maxHeight: {
        76: "25em",
        half: "42%"
      },
      maxWidth:{
        "screen":"100vw"
      },
      zIndex: {
        100: "100",
        1000: "1000",
      },
      backgroundColor: {
        none: "none",
      },
      margin: {
        auto: "auto",
      },
    },
  },
  plugins: [],
};
