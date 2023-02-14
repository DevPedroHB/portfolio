import { styled } from "@/styles";

export const ScrollToTopContainer = styled("button", {
  position: "fixed",
  right: "$6",
  bottom: "-20%",
  opacity: 0.8,
  zIndex: 10,
  transition: "bottom .4s, background-color .2s",
  lineHeight: 0,
  border: 0,
  backgroundColor: "$violet9",
  color: "$violet1",
  borderRadius: "$rounded",
  padding: "$1",

  "&:hover": {
    backgroundColor: "$violet10",
  },

  variants: {
    scroll: {
      true: {
        bottom: "$12",
      },
    },
  },
});
