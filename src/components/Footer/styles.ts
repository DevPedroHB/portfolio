import { styled } from "@/styles";

export const FooterContainer = styled("footer", {
  width: "100%",
  backgroundColor: "$violet3",
});

export const FooterContent = styled("div", {
  maxWidth: "51rem",
  margin: "0 auto",
  padding: "$8 $6",
  display: "grid",
  gap: "$8",

  "@bp2": {
    paddingBottom: "$16",
  },
});

export const FooterTop = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "$4",
});

export const FooterBottom = styled("div", {
  width: "100%",
  textAlign: "center",
  fontSize: "$text-xs",
  color: "$mauve11",
});

export const FooterHero = styled("div", {
  span: {
    fontSize: "$text-sm",
  },
});

export const FooterLinks = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$6",
});

export const FooterSocials = styled("div", {
  display: "flex",
  justifyContent: "end",
  alignItems: "start",
  gap: "$6",
  lineHeight: 0,
});
