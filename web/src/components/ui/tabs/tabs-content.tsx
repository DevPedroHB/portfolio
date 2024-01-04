"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

interface ITabsContent extends Tabs.TabsContentProps {}

export function TabsContent({ children, className, ...props }: ITabsContent) {
  return (
    <Tabs.Content className={twMerge("", className)} {...props}>
      {children}
    </Tabs.Content>
  );
}
