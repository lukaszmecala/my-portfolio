import { useTranslation } from "react-i18next";
import Title from "../ui/Title";
import styled from "styled-components";
import Heading from "../ui/Heading";

import technologies from "../data/technologies";

const TechSection = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-direction: column;
  padding: 6rem 20rem;
  border-radius: var(--border-radius-lg);

  background-color: var(--backdrop-color-white);

  border-bottom: 1px solid var(--backdrop-color);
  border-top: 1px solid var(--backdrop-color);
  box-shadow: var(--shadow-md);

  @media (max-width: 89em) {
    padding: 4rem 6rem;
    margin: 0 2rem;
  }

  @media (max-width: 48em) {
    padding: 4rem 2rem;
    margin: 0 2rem;
  }
`;

const Img = styled.img`
  display: block;
  width: 4.8rem;

  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 48em) {
    width: 3.6rem;
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

function Tech() {
  const { t } = useTranslation();
  return (
    <>
      <Title title={t("tech_title")} />
      <TechSection id="tech">
        <Heading as="h5">{t("tech_subtitle")}</Heading>
        <TechContainer>
          {technologies.map((tech) => (
            <div key={Math.random(0, 299) * new Date().getTime() * 252435}>
              <Img src={tech.logo} alt={tech.name} />
            </div>
          ))}
        </TechContainer>
      </TechSection>
    </>
  );
}

export default Tech;
