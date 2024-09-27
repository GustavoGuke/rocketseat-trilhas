import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rocketseat: "#8257e6",

        white: "#FFF",

        gray900: "#121214",
        gray800: "#282024",
        gray300: "#c4c4cc",
        gray100: "#e1e1e6",

        green500: "#00875f",
        green300: "#00b37e",

        gradient1: "#1ea483",
        gradient2: "#7465d4",


      },
    },
  },
  plugins: [],
};
export default config;
