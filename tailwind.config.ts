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
      keyframes: {
        'scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'scroll-rtl': 'scroll-rtl 30s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;