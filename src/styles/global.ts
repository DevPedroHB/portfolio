import { globalCss } from "@/styles";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    ":focus": {
      outline: 0,
      boxShadow: "0 0 0 2px hsl(251, 63.2%, 63.2%)",
      borderRadius: "$rounded",
    },

    "::-webkit-scrollbar": {
      width: ".375rem",
      height: ".375rem",
      backgroundColor: "$mauve2",
    },

    "::-webkit-scrollbar-thumb": {
      background: "$violet9",
      borderRadius: "$rounded-md",
    },

    "::-webkit-scrollbar-thumb:hover": {
      background: "$violet10",
    },
  },

  html: {
    scrollBehavior: "smooth",

    "@bp3": {
      fontSize: "97.5%",
    },
    "@bp2": {
      fontSize: "87.5%",
    },
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
    textDecoration: "none",
    cursor: "pointer",
  },

  button: {
    cursor: "pointer",
  },

  ul: {
    listStyle: "none",
  },
});
