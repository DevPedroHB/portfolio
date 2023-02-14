import { NextSeo } from "next-seo";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Portfólio PedroHB"
        description="Este é o meu portfólio pessoal, onde exibo meus projetos e habilidades profissionais. Ele inclui informações sobre minha experiência, projetos e trabalhos anteriores, bem como um breve resumo sobre quem sou e o que eu ofereço."
      />
      <HomeContainer>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </HomeContainer>
    </>
  );
}
