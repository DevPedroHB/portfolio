import { Star } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IRating extends ComponentProps<"div"> {
  rating: number;
}

export function Rating({ rating, children, className, ...props }: IRating) {
  return (
    <div
      className={twMerge(
        "flex gap-1 text-violet-9",
        "dark:text-violetdark-9",
        className,
      )}
      {...props}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <Star
            className={twMerge(
              "h-3.5 w-3.5",
              rating > i && "fill-violet-9 dark:fill-violetdark-9",
            )}
            strokeWidth={2.5}
          />
        );
      })}
    </div>
  );
}
