import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: var(--color-flush-orange-600);
  color: var(--color-flush-orange-50);
  padding: 2rem;
  text-align: center;
  margin: 8rem auto 0;
`;

function Footer() {
  return (
    <FooterSection>
      Copyright &copy; {new Date().getFullYear()} | mecala.dev
    </FooterSection>
  );
}

export default Footer;
