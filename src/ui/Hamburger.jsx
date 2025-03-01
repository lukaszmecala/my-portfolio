import styled from "styled-components";

const HamburgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;
  gap: 0.6rem;

  display: none;

  margin-right: 2.4rem;

  @media (max-width: 48em) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  span {
    width: 26px;
    height: 3px;
    border-radius: var(--border-radius-full);
    position: relative;
    transform-origin: 0.8px;
    background-color: var(--color-flush-orange-50);
    transition: transform 0.3s ease-in;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

function Hamburger({ isMenuOpen, setIsMenuOpen }) {
  return (
    <HamburgerMenu open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerMenu>
  );
}

export default Hamburger;
