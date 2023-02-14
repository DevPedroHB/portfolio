import { CaretDoubleUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { ScrollToTopContainer } from "./styles";

export function ScrollToTop() {
  const [scroll, setScroll] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 560) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  function handleScrollTop() {
    animateScroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollToTopContainer scroll={scroll} onClick={handleScrollTop}>
      <CaretDoubleUp size={20} weight="bold" />
    </ScrollToTopContainer>
  );
}
