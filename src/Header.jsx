import styled from "styled-components";
import Logo from "./ui/Logo";
import Menu from "./components/Menu";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useEffect, useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.64);
  z-index: 999;
  transition: opacity 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const HeaderSection = styled.header`
  max-width: 140rem;
  position: relative;
  z-index: 1001;
  margin: 1.6rem 0 0;
  @media (max-width: 91em) {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;

  background-color: transparent;
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--backdrop-color);
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  @media (max-width: 48rem) {
    position: fixed;
    max-width: 140rem;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 98%;
    z-index: 999;
    background-color: var(--color-woodsmoke-950);
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Overlay $isOpen={isMenuOpen} />
      <HeaderSection>
        <HeaderContainer>
          <Logo />
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <LanguageSwitcher />
        </HeaderContainer>
      </HeaderSection>
    </>
  );
}

export default Header;
