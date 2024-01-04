"use client";

import * as Progress from "@radix-ui/react-progress";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IProgressBar extends Progress.ProgressProps {}

export function ProgressBar({ className, value, ...props }: IProgressBar) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value ? value : 0), 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className={twMerge(
        "h-progress-bar w-full overflow-hidden rounded bg-violet-9/50 dark:bg-violetdark-9/50",
        className,
      )}
      style={{
        transform: "translateZ(0)",
      }}
      value={progress}
      {...props}
    >
      <Progress.Indicator
        className="bg-violet-solid h-full w-full rounded transition-all"
        style={{
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </Progress.Root>
  );
}
