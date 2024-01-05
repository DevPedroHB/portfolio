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
      <Dialog.Overlay className="data-[state=open]:animate-dialogOverlayShow fixed inset-0 z-40 grid place-items-center bg-blacka-6 p-4">
        <Dialog.Content
          className={twMerge(
            "data-[state=open]:animate-dialogContentShow relative",
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
