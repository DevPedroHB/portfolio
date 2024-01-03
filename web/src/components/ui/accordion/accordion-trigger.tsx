"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

interface IAccordionTrigger extends Accordion.AccordionTriggerProps {}

export function AccordionTrigger({
  children,
  className,
  ...props
}: IAccordionTrigger) {
  return (
    <Accordion.Header>
      <Accordion.Trigger className={twMerge("", className)} {...props}>
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  );
}
