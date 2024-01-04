"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

interface ITabsTrigger extends Tabs.TabsTriggerProps {}

export function TabsTrigger({ children, className, ...props }: ITabsTrigger) {
  return (
    <Tabs.Trigger className={twMerge("", className)} {...props}>
      {children}
    </Tabs.Trigger>
  );
}
