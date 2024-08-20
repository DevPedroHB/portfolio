import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { NewProject } from "./components/new-project";
import { Portfolio } from "./components/portfolio";
import { Qualification } from "./components/qualification";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Testimonial } from "./components/testimonial";

interface IMetadata {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: IMetadata): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("titles.home"),
    description: t("description"),
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <NewProject />
      <Testimonial />
      <Contact />
    </main>
  );
}
