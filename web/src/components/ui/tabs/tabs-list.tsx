"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

interface ITabsList extends Tabs.TabsListProps {}

export function TabsList({ children, className, ...props }: ITabsList) {
  return (
    <Tabs.List className={twMerge("", className)} {...props}>
      {children}
    </Tabs.List>
  );
}
