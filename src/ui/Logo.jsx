import styled from "styled-components";

const LogoName = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: italic;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-flush-orange-50);
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  font-style: normal;
  color: var(--color-flush-orange-600);
`;

function Logo() {
  return (
    <LogoName>
      Mecala<Span>.dev</Span>
    </LogoName>
  );
}

export default Logo;
