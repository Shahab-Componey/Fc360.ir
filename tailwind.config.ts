import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "4xl": {max: "2040px"},
        "2xl": {max: "1500px"},
        xl: {max: "1200px"},
        lg: {max: "979px"},
        md: {max: "767px"},
        sm: {max: "610px"},
        xs: {max: "550px"},
      },
      colors: {
        Header: "var(--header-color)",
        Footer: "var(--footer-color)",
        Background: "var(--background-color)",
        Regular: "var(--font-color)",
      },
      height: {
        Header: "var(--section-size)",
      },
      borderRadius: {
        Header: "30px",
        Fotter: "30px",
      },
      spacing: {
        NavBar: "2.75rem",
        "main-heigth": "var(--main-heigth)",
        "360logoWeight": "11rem",
        "360logoHeight": "14.5rem",
        "Footer-Size": "var(--section-size)",
      },
      padding: {
        "section-space": "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
