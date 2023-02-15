import { useTheme } from "next-themes";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  House,
  Image as ImageIcon,
  Moon,
  PaperPlaneRight,
  SquaresFour,
  Sun,
  User,
  X,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import {
  HeaderContainer,
  Nav,
  NavBtns,
  NavItem,
  NavList,
  NavMenu,
} from "./styles";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function handleScrollNav() {
    if (window.scrollY >= 72) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  function handleToggleNav() {
    setNavToggle(!navToggle);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <HeaderContainer scrollNav={scrollNav}>
      <Nav>
        <Link href="/">PedroHB</Link>
        <NavMenu navToggle={navToggle}>
          <NavList>
            <NavItem>
              <LinkScroll activeClass="active" to="hero" spy={true}>
                <House />
                Home
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll activeClass="active" to="about" spy={true}>
                <User />
                Sobre
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll activeClass="active" to="skills" spy={true}>
                <FileText />
                Habilidades
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll activeClass="active" to="services" spy={true}>
                <Briefcase />
                Serviços
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll activeClass="active" to="portfolio" spy={true}>
                <ImageIcon />
                Portfólio
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll activeClass="active" to="contact" spy={true}>
                <PaperPlaneRight />
                Contacte-me
              </LinkScroll>
            </NavItem>
          </NavList>
          <button onClick={handleToggleNav}>
            <X weight="regular" />
          </button>
        </NavMenu>
        <NavBtns>
          <button onClick={handleChangeTheme}>
            {theme === "light" ? (
              <Moon weight="regular" />
            ) : (
              <Sun weight="regular" />
            )}
          </button>
          <button onClick={handleToggleNav}>
            <SquaresFour weight="regular" />
          </button>
        </NavBtns>
      </Nav>
    </HeaderContainer>
  );
}
