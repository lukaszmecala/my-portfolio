import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Hamburger from "../ui/Hamburger";
import menuItems from "../data/menuItems";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 21, 21, 0.5);
  z-index: -30000;
  transition: opacity 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;
const Link = styled.a`
  transition: color 0.3s ease-in;
  padding: 1rem;
  display: block;
  text-align: center;

  &:hover,
  &:active {
    color: var(--color-flush-orange-600);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 48em) {
    flex-direction: column;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translate(-50%, ${({ $isOpen }) => ($isOpen ? "26%" : "-120%")});
    width: 90%;
    background: var(--color-woodsmoke-950);
    padding: 2rem 0;
    border-radius: var(--border-radius-xl);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--backdrop-color);
    z-index: 1000000000;
    transition: transform 0.6s ease-in-out;
  }
`;

const StyledLink = styled.li`
  @media (max-width: 48em) {
    width: 90%;
    border-bottom: 1px solid var(--color-flush-orange-600);
  }
`;

const Nav = styled.nav`
  position: relative;
`;

function Menu({ isMenuOpen, setIsMenuOpen }) {
  const { t } = useTranslation();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Blokada scrolla
    } else {
      document.body.style.overflow = "auto"; // Przywrócenie scrolla
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Nav ref={menuRef}>
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <StyledList $isOpen={isMenuOpen}>
        {menuItems.map((menuItem) => (
          <StyledLink key={menuItem.id}>
            <Link href={menuItem.link} onClick={() => setIsMenuOpen(false)}>
              {t(menuItem.label)}
            </Link>
          </StyledLink>
        ))}
      </StyledList>
    </Nav>
  );
}

export default Menu;
