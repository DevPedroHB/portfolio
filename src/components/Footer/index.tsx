import Link from "next/link";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Link as LinkScroll } from "react-scroll";
import {
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterHero,
  FooterLinks,
  FooterSocials,
  FooterTop,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterHero>
            <h2>PedroHB</h2>
            <span>Desenvolvedor Fullstack</span>
          </FooterHero>
          <FooterLinks>
            <li>
              <LinkScroll to="services">Serviços</LinkScroll>
            </li>
            <li>
              <LinkScroll to="portfolio">Portfólio</LinkScroll>
            </li>
            <li>
              <LinkScroll to="contact">Contate-me</LinkScroll>
            </li>
          </FooterLinks>
          <FooterSocials>
            <Link
              href="https://www.linkedin.com/in/devpedrohb/"
              target="_blank"
            >
              <LinkedinLogo size={20} />
            </Link>
            <Link href="https://github.com/DevPedroHB" target="_blank">
              <GithubLogo size={20} />
            </Link>
            <Link href="mailto:pedroh.bergamo20@gmail.com" target="_blank">
              <EnvelopeSimple size={20} />
            </Link>
          </FooterSocials>
        </FooterTop>
        <FooterBottom>
          &#169; Pedro Henrique Bérgamo. Todos os direitos reservados
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}
