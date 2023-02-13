import { globalCss } from "@/styles";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    scrollBehavior: "smooth",
  },

  body: {
    backgroundColor: "$mauve1",
    color: "$mauve12",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "$poppins",
    fontWeight: "$font-normal",
    fontSize: "$text-base",
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },
});
