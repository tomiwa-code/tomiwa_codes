import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        dark: {
          100: "#dcf5f3",
          200: "#b8ebe7",
          300: "#95e1dc",
          400: "#71d7d0",
          500: "#4ecdc4",
          600: "#3ea49d",
          700: "#2f7b76",
          800: "#1f524e",
          900: "#102927",
        },
        light: {
          100: "#d0d0d0",
          200: "#a1a1a1",
          300: "#727272",
          400: "#434343",
          500: "#141414",
          600: "#101010",
          700: "#0c0c0c",
          800: "#080808",
          900: "#040404",
        },
        darkSecondary: "#001829",
        lightSecondary: "#f7f7f7",
      },
      fontFamily: {
        sans: ["var(--StretchPro)"],
      },
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
