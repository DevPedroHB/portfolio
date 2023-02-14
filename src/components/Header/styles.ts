import { styled } from "@/styles";
import Link from "next/link";

export const HeaderContainer = styled("header", {
  width: "100%",
  position: "fixed",
  backgroundColor: "$mauve1",
  fontWeight: "$font-medium",

  button: {
    backgroundColor: "transparent",
    border: 0,
    transition: "color .2s",
    lineHeight: 0,

    "&:hover": {
      color: "$violet10",
    },
  },

  svg: {
    width: "1.25rem",
    height: "1.25rem",
  },

  variants: {
    scrollNav: {
      true: {
        boxShadow: "0 -1px 4px rgba(0, 0, 0, .15)",
      },
    },
  },

  "@bp2": {
    bottom: 0,
  },
});

export const Nav = styled("nav", {
  maxWidth: "63.5rem",
  height: "4.5rem",
  margin: "0 auto",
  padding: "0 $6",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$4",

  "@bp2": {
    height: "3rem",
  },
});

export const NavLogo = styled(Link, {
  transition: "color .2s",

  "&:hover": {
    color: "$violet10",
  },
});

export const NavMenu = styled("div", {
  position: "relative",
  marginLeft: "auto",

  button: {
    display: "none",
  },

  "@bp2": {
    position: "fixed",
    bottom: "-100%",
    left: "0",
    width: "100%",
    backgroundColor: "$mauve1",
    padding: "$8 $6 $12",
    boxShadow: "0 -1px 4px rgba(0, 0, 0, .15)",
    borderRadius: "1.5rem 1.5rem 0 0",
    transition: "bottom .2s",

    button: {
      display: "block",
      position: "absolute",
      right: "$6",
      bottom: ".875rem",
    },
  },

  variants: {
    navToggle: {
      true: {
        "@bp2": {
          bottom: "0",
        },
      },
    },
  },
});

export const NavList = styled("ul", {
  display: "flex",
  gap: "$8",

  "@bp2": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "$10",
  },
});

export const NavItem = styled("li", {
  fontSize: "$text-sm",
  transition: "color .2s",

  "&:hover": {
    color: "$violet10",
  },

  a: {
    "&.active": {
      color: "$violet10",
    },
  },

  svg: {
    display: "none",
  },

  "@bp2": {
    svg: {
      display: "block",
    },

    a: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

export const NavBtns = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$4",

  button: {
    "&:nth-child(2)": {
      display: "none",
    },
  },

  "@bp2": {
    button: {
      "&:nth-child(2)": {
        display: "block",
      },
    },
  },
});
