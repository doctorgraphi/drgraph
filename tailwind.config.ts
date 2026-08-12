import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#EC7D22",
        graphite: "#494949",
        paper: "#F7F7F5",
      },
      fontFamily: {
        sans: ["Seravek", "Arial", "sans-serif"],
        persian: ["Yekan Bakh", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
