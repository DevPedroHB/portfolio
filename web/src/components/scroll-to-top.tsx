"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { Button } from "./ui/button";

export function ScrollToTop() {
  const [scroll, setScroll] = useState(false);

  function handleScrollToTop() {
    animateScroll.scrollToTop();
  }

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 560 ? true : false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      type="button"
      size="icon"
      data-scroll={scroll}
      onClick={handleScrollToTop}
      className="fixed -bottom-[20%] right-4 transition-all data-[scroll=true]:bottom-20"
    >
      <ArrowUp className="size-5" />
    </Button>
  );
}
