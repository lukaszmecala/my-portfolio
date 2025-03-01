import styled, { css, keyframes } from "styled-components";
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
  z-index: 1;
  transition: opacity 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const slideDown = keyframes`
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
`;

const HeaderSection = styled.header`
  max-width: 140rem;
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

  ${(props) =>
    props.type === "sticky" &&
    css`
      position: fixed;
      top: 2%;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      max-width: 140rem;
      width: 98%;
      z-index: 999;
      background-color: var(--color-woodsmoke-950);
      border: 1px solid var(--backdrop-color);
      animation: ${slideDown} 0.3s forwards;
    `};

  /* ${(props) =>
    props.$isMenuOpen &&
    css`
      position: static !important;
      transform: none !important;
      animation: none !important;
    `} */
`;

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !isMenuOpen) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Overlay $isOpen={isMenuOpen} />
      <HeaderSection>
        <HeaderContainer
          type={isSticky ? "sticky" : ""}
          $isMenuOpen={isMenuOpen}
        >
          <Logo />
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <LanguageSwitcher />
        </HeaderContainer>
      </HeaderSection>
    </>
  );
}

export default Header;
