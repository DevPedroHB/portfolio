import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-poppins)",
      },
      height: {
        nav: "4.5rem",
        "nav-responsive": "3rem",
        "toggle-menu": "1.1rem",
      },
      width: {
        "toggle-menu": "1.1rem",
      },
      maxWidth: {
        nav: "60.5rem",
        app: "48rem",
      },
      padding: {
        "nav-menu": "2rem 1.5rem 4rem",
      },
      boxShadow: {
        nav: "0 -1px 4px rgba(0, 0, 0, .15)",
      },
      borderRadius: {
        nav: "1.5rem 1.5rem 0 0",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix-colors"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};

export default config;
