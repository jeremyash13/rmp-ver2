module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.html"],
  theme: {
    extend: {
      inset: {
        "1/2": "50%",
      },
      width: {
        "max-content": "max-content",
        "min-content": "min-content",
      },
      height: {
        "11/12": "91.666667%",
      },
      maxHeight: {
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
