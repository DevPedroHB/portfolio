"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

interface IAccordionContent extends Accordion.AccordionContentProps {}

export function AccordionContent({
  children,
  className,
  ...props
}: IAccordionContent) {
  return (
    <Accordion.Content className={twMerge("", className)} {...props}>
      {children}
    </Accordion.Content>
  );
}
