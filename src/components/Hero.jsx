import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Button from "../ui/Buttion";
import ButtonGroups from "../ui/ButtonGroups";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HeroSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 4rem;
  margin-top: 12rem;
  padding: 6rem 2rem;

  @media (max-width: 91em) {
    padding: 6rem 3rem;
  }

  @media (max-width: 57em) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 48rem) {
    margin-top: 11rem;
    padding: 5rem 4rem;
  }
`;

const Img = styled(motion.img)`
  display: block;
  width: 46rem;
  border-radius: 60% 40% 68% 32% / 51% 72% 28% 49%;
  object-fit: cover;
  object-position: center;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  filter: drop-shadow(0 0 30px var(--color-flush-orange-600));

  @media (max-width: 66em) {
    width: 38rem;
  }

  @media (max-width: 48em) {
    margin-top: 3rem;
    filter: drop-shadow(0 0 20px var(--color-flush-orange-600));
    width: 32rem;
  }
`;

const SpanElement = styled.span`
  color: var(--color-flush-orange-600);
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.4rem;
  @media (max-width: 57em) {
    text-align: center;
  }
`;

function Hero() {
  const { t } = useTranslation();
  return (
    <HeroSection
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Row type="vertical">
        <Heading as="h1">
          FRONTEND <SpanElement>DEVELOPER</SpanElement>
        </Heading>
        <HeroDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {t("hero_description")}
        </HeroDescription>
        <ButtonGroups>
          <Button href="#projects" variations={"primary"} size={"small"}>
            <span>{t("learn_more")}</span>
          </Button>
          <Button
            href="tel:+48696129815"
            variations={"secondary"}
            size={"small"}
          >
            {t("contact_btn_text")}
          </Button>
        </ButtonGroups>
      </Row>
      <div>
        <Img
          src="/hero-img.png"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </HeroSection>
  );
}

export default Hero;
