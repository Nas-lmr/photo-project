import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayDark: "#313131",
        grayMid: "#5f5f5f",
        grayLight: "#f2ecff",
        greenLight: "#00c896",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      height: {
        mid: "30rem",
        big: "35rem",
        large: "40rem",
        extra: "150vh",
      },
    },
  },
  plugins: [],
};
export default config;
