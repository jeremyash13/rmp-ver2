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
      boxShadow: {
        "md-dark": "0 4px 6px -1px rgba(0, 0, 0, .5), 0 2px 4px -1px rgba(0, 0, 0, .25)",
        "lg-dark": "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
        "xl-dark": "0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
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
