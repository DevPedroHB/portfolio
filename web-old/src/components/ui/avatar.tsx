import * as RadixAvatar from "@radix-ui/react-avatar";
import { User2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface IAvatar extends RadixAvatar.AvatarImageProps {}

export function Avatar({ className, ...props }: IAvatar) {
  return (
    <RadixAvatar.Root className="h-14 w-14 overflow-hidden rounded-full">
      <RadixAvatar.Image
        className={twMerge(
          "h-full w-full rounded-full object-cover object-center",
          className,
        )}
        {...props}
      />
      <RadixAvatar.Fallback
        delayMs={600}
        className="bg-mauve-subtle flex h-full w-full items-center justify-center rounded-full leading-none"
      >
        <User2 className="text-mauve-dim h-6 w-6" />
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
