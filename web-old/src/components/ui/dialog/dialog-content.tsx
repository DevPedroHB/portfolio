"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface IDialogContent extends Dialog.DialogContentProps {}

export function DialogContent({
  children,
  className,
  ...props
}: IDialogContent) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className={twMerge(
          "fixed inset-0 z-50 grid place-items-center overflow-auto bg-blacka-6 p-4 scrollbar scrollbar-track-mauve-2 scrollbar-thumb-violet-9 scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-1",
          "hover:scrollbar-thumb-violet-10",
          "dark:scrollbar-track-mauvedark-2 dark:scrollbar-thumb-violetdark-9 dark:hover:scrollbar-thumb-violetdark-10",
          "data-[state=open]:animate-dialogOverlayShow",
        )}
      >
        <Dialog.Content
          className={twMerge(
            "relative data-[state=open]:animate-dialogContentShow",
            className,
          )}
          {...props}
        >
          {children}
          <Dialog.Close className="absolute right-4 top-4 text-violet-9 transition-colors hover:text-violet-10 dark:text-violetdark-9 dark:hover:text-violetdark-10">
            <X className="h-5 w-5" strokeWidth={2.5} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
