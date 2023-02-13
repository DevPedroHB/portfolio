import { mauve, mauveA, violet, violetA } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...mauveA,
      ...violet,
      ...violetA,
    },
    fonts: {
      poppins: "Poppins, sans-serif",
    },
    fontSizes: {
      "text-xs": "0.75rem", // 12px
      "text-sm": "0.875rem", // 14px
      "text-base": "1rem", // 16px
      "text-lg": "1.125rem", // 18px
      "text-xl": "1.25rem", // 20px
      "text-2xl": "1.5rem", // 24px
    },
    fontWeights: {
      "font-normal": 400,
      "font-medium": 500,
      "font-semibold": 600,
      "font-bold": 700,
    },
    lineHeights: {
      "leading-none": 1,
      "leading-tight": 1.25,
      "leading-snug": 1.375,
      "leading-normal": 1.5,
      "leading-relaxed": 1.625,
      "leading-loose": 2,
    },
    radii: {
      "rounded-sm": "0.125rem", // 2px
      rounded: "0.25rem", // 4px
      "rounded-md": "0.375rem", // 6px
      "rounded-lg": "0.5rem", // 8px
      "rounded-xl": "0.75rem", // 12px
      "rounded-full": "9999px", // full
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      40: "10rem",
      64: "16rem",
      80: "20rem",
    },
  },
});
