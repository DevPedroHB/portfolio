"use client";

import { Loader2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled={!mounted}
        className={twMerge(
          "leading-none transition-colors hover:text-violet-9 active:text-violet-10",
          "dark:hover:text-violetdark-9 dark:active:text-violetdark-10",
        )}
      >
        <Loader2 className="h-5 w-5 animate-spin" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleChangeTheme}
      disabled={!mounted}
      className={twMerge(
        "leading-none transition-colors hover:text-violet-9 active:text-violet-10",
        "dark:hover:text-violetdark-9 dark:active:text-violetdark-10",
      )}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
