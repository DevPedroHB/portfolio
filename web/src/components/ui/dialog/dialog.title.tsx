"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

interface IDialogTitle extends Dialog.DialogTitleProps {}

export function DialogTitle({ children, className, ...props }: IDialogTitle) {
  return (
    <Dialog.Title className={twMerge("", className)} {...props}>
      {children}
    </Dialog.Title>
  );
}
