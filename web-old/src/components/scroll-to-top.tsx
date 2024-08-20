"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { twMerge } from "tailwind-merge";

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
    <button
      type="button"
      className={twMerge(
        "bg-violet-solid fixed bottom-20 right-4 aspect-square rounded-md px-2 transition-all",
        "data-[scroll=false]:translate-y-28",
      )}
      data-scroll={scroll}
      onClick={handleScrollTop}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={4} />
    </button>
  );
}
