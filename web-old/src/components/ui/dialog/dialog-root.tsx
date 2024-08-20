"use client";

import * as Dialog from "@radix-ui/react-dialog";

interface IDialogRoot extends Dialog.DialogProps {}

export function DialogRoot({ children, ...props }: IDialogRoot) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>;
}
