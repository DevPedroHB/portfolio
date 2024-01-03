"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

interface IAccordionRoot extends Accordion.AccordionSingleProps {}

export function AccordionRoot({
  children,
  className,
  ...props
}: IAccordionRoot) {
  return (
    <Accordion.Root className={twMerge("", className)} {...props}>
      {children}
    </Accordion.Root>
  );
}
