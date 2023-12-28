const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}", "./src/components/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
