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
    <Accordion.Content
      className={twMerge(
        "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
        className,
      )}
      {...props}
    >
      {children}
    </Accordion.Content>
  );
}
