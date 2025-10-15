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
        primary: {
          DEFAULT: "#1e5c5b",
          light: "#398da8",
        },
        accent: {
          DEFAULT: "#ff8359",
        },
        cream: "#fcf6ed",
      },
      fontFamily: {
        axel: ["var(--font-axel)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
        riposte: ["var(--font-riposte)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;