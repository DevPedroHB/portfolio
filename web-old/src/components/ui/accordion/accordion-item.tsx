"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

interface IAccordionItem extends Accordion.AccordionItemProps {}

export function AccordionItem({
  children,
  className,
  ...props
}: IAccordionItem) {
  return (
    <Accordion.Item className={twMerge("", className)} {...props}>
      {children}
    </Accordion.Item>
  );
}
