/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#933145",
        darkSecondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        light: "0px 5px 20px 0px rgb(69 67 96 / 10%)",
        dark: "0px 5px 20px 0px rgb(248 248 242 / 10%)",
      },
      backgroundImage: {
        dots: "url('/src/assets/dots-bg.svg')",
        "dots-dark": "url('/src/assets/dots-bg-dark.svg')",
      },
    },
  },
  plugins: [],
};
