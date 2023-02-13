import { NextSeo } from "next-seo";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Portfólio PedroHB"
        description="Este é o meu portfólio pessoal, onde exibo meus projetos e habilidades profissionais. Ele inclui informações sobre minha experiência, projetos e trabalhos anteriores, bem como um breve resumo sobre quem sou e o que eu ofereço."
      />
      <HomeContainer>
        <h1>Page Home</h1>
      </HomeContainer>
    </>
  );
}
