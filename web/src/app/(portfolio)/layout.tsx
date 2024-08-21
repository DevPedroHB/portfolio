import { Navbar } from "@/components/navbar";
import type { ReactNode } from "react";

interface IPortfolioLayout {
  children: ReactNode;
}

export default function PortfolioLayout({
  children,
}: Readonly<IPortfolioLayout>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
