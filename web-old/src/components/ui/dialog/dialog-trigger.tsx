"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

interface IDialogTrigger extends Dialog.DialogTriggerProps {}

export function DialogTrigger({
  children,
  className,
  ...props
}: IDialogTrigger) {
  return (
    <Dialog.Trigger className={twMerge("", className)} {...props}>
      {children}
    </Dialog.Trigger>
  );
}
