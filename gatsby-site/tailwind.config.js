module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily : {
        'roboto': ['Roboto'],
        'sorts-mill': ['Sorts Mill Goudy'],
      },
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
      colors: {
        'blackish': '#2E2E2E',
        'dark-gray': '#565656',
        'light-gray': '#848484',
        'off-white': '#f5f5f5',
        'zone-1': '#d55b54',
        'zone-2': '#ccdce3',
        'zone-3': '#9cb88c',
        'zone-4': '#b3a3c5',
      }
    },
  },
  variants: {},
  plugins: [],
}
