import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
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
      <ScrollToTop />
      <Footer />
    </>
  );
}
