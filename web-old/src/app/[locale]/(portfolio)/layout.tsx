import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ReactNode } from "react";

interface IAppLayout {
  children: ReactNode;
}

export default function AppLayout({ children }: IAppLayout) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
