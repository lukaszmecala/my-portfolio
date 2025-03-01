import { useTranslation } from "react-i18next";
import Title from "../ui/Title";
import styled from "styled-components";
import Row from "../ui/Row";
import Button from "../ui/Buttion";
const AboutSection = styled.div`
  margin: 6rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  padding: 2rem;

  @media (max-width: 70em) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 9rem;
  }

  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    margin: 6rem 1rem;
    gap: 8rem;
  }
`;

const ImgContainer = styled.div`
  width: 46rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    width: 100%;
    height: 100%;

    border-radius: 42px;
    z-index: -1;

    border: 2px solid var(--backdrop-color);
  }
  @media (max-width: 48em) {
    width: 32rem;

    &::before {
      top: -15px;
      left: -10px;
    }
  }
`;
const Img = styled.img`
  display: block;
  width: 100%;

  object-fit: cover;
  object-position: center;
`;
const AboutDecription = styled.p`
  line-height: 1.6;
  font-style: italic;
`;
const Content = styled.div`
  background-color: var(--color-woodsmoke-950);
  padding: 3rem 4rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  position: relative;
  @media (max-width: 70em) {
    padding: 2rem;
    font-size: 1.5rem;
  }

  @media (max-width: 48em) {
    padding: 2rem;
    font-size: 1.3rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
    width: 20%;
    height: 40%;
    background-color: var(--color-flush-orange-600);
    border-radius: var(--border-radius-sm);
    z-index: -1;
    transition: opacity 0.3s ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    right: -0.2rem;
    width: 20%;
    height: 40%;
    background-color: var(--color-flush-orange-600);
    border-radius: var(--border-radius-sm);
    z-index: -1;
    transition: opacity 0.3s ease-in-out;
  }
`;

const AboutRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 70em) {
    gap: 5rem;
    align-items: center;
  }

  @media (max-width: 48em) {
    align-items: center;
    gap: 6rem;
  }
`;

function About() {
  const { t } = useTranslation();
  return (
    <>
      <Title title={t("about_me_title")} />
      <AboutSection>
        <ImgContainer>
          <Img src="src/assets/about-img.png" />
        </ImgContainer>

        <AboutRow>
          <Content>
            <Row type="vertical">
              <AboutDecription>{t("about_me_description")}</AboutDecription>
            </Row>
          </Content>
          <Button
            href="tel:+48696129815"
            variations={"secondary"}
            size={"small"}
          >
            <span>{t("contact_btn_text")}</span>
          </Button>
        </AboutRow>
      </AboutSection>
    </>
  );
}

export default About;
