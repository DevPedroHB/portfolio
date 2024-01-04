"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

interface ITabsRoot extends Tabs.TabsProps {}

export function TabsRoot({ children, className, ...props }: ITabsRoot) {
  return (
    <Tabs.Root className={twMerge("", className)} {...props}>
      {children}
    </Tabs.Root>
  );
}
