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
        "progress-bar": ".3125rem",
      },
      maxWidth: {
        nav: "60.5rem",
        app: "48rem",
        "contact-form": "28.75rem",
      },
      padding: {
        "nav-menu": "2rem 1.5rem 4rem",
        section: "6rem 1rem 2rem",
        "section-responsive": "2rem 1rem 4rem",
        "skills-list": "2.7rem",
        "service-card": "6rem 1rem 2rem 2.5rem",
        input: ".75rem 1rem .75rem",
      },
      boxShadow: {
        nav: "0 -1px 4px rgba(0, 0, 0, .15)",
        "service-card": "0 2px 4px rgb(0, 0, 0, .15)",
        "service-card-hover": "0 4px 8px rgb(0, 0, 0, .15)",
      },
      gridTemplateColumns: {
        hero: "max-content 1fr 1fr",
        "hero-responsive": ".25fr 3fr",
        content: "max-content",
        qualifications: ".6fr",
        "qualification-data": "1fr max-content 1fr",
        services: "repeat(auto-fit, minmax(8.75rem, 1fr))",
        "new-project": "1fr max-content",
      },
      gridColumn: {
        initial: "initial",
        "1/3": "1/3",
      },
      width: {
        "about-img": "21.875rem",
      },
      translate: {
        "line-x": "6px",
        "line-y": "-7px",
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
        dialogOverlayShow: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "scale(0)",
          },
          to: {
            opacity: " 1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix-colors"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};

export default config;
