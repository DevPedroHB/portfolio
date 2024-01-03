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
      },
      maxWidth: {
        nav: "60.5rem",
        app: "48rem",
      },
      padding: {
        "nav-menu": "2rem 1.5rem 4rem",
        section: "6rem 0 2rem",
        "section-responsive": "2rem 0 4rem",
      },
      boxShadow: {
        nav: "0 -1px 4px rgba(0, 0, 0, .15)",
      },
      gridTemplateColumns: {
        hero: "max-content 1fr 1fr",
        "hero-responsive": ".25fr 3fr",
        content: "max-content",
      },
      gridColumn: {
        initial: "initial",
        "1/3": "1/3",
      },
      gap: {
        "4.5": "1.5rem",
      },
      width: {
        "about-img": "21.875rem",
      },
      keyframes: {
        slideDown: {
          from: {
            height: "0",
            opacity: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: {
            height: "0",
            opacity: "0",
          },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix-colors"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};

export default config;
