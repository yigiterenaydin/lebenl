import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#111", // yazilar cogu yerde
        secondary: "#f10909",
        tertiary: "#bff109", // büyük karelerin pdflerin olduyu büyük karelerin al kismin ilk renk 
        borderColor: "#f10909", // bütün karelerin ince sizgisi 
      },
    },
  },
  plugins: [],
};
export default config;
