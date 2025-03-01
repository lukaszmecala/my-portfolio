import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import ButtonGroups from "../ui/ButtonGroups";
import Button from "../ui/Buttion";
import Heading from "../ui/Heading";
import Title from "../ui/Title";
import { useTranslation } from "react-i18next";

import projects from "../data/projects";

// Animacja fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  width: 100%;
  background-color: #1c1c1c;
  color: #fff;
  padding: 6rem 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const getClipPath = (index) => {
  const shapes = [
    "polygon(87.16% 83.46%,2.45% 65.45%,60.4% 1.09%,87.16% 83.46%,calc(60.4% - 0.42px) calc(1.09% - -1.96px),calc(2.45% - -1.9px) calc(65.45% - 0.62px),calc(87.16% - 1.49px) calc(83.46% - 1.34px),calc(60.4% - 0.42px) calc(1.09% - -1.96px));", // Trójkąt
    "polygon(97.55% 65.45%,50% 100%,2.45% 65.45%,20.61% 9.55%,79.39% 9.55%,97.55% 65.45%,calc(79.39% - 1.18px) calc(9.55% - -1.62px),calc(20.61% - -1.18px) calc(9.55% - -1.62px),calc(2.45% - -1.9px) calc(65.45% - 0.62px),calc(50% - 0px) calc(100% - 2px),calc(97.55% - 1.9px) calc(65.45% - 0.62px),calc(79.39% - 1.18px) calc(9.55% - -1.62px))",
    "polygon(85.72% 84.98%,37.57% 98.43%,1.84% 63.45%,14.28% 15.02%,62.43% 1.57%,98.16% 36.55%,85.72% 84.98%,calc(98.16% - 1.93px) calc(36.55% - -0.54px),calc(62.43% - 0.5px) calc(1.57% - -1.94px),calc(14.28% - -1.43px) calc(15.02% - -1.4px),calc(1.84% - -1.93px) calc(63.45% - 0.54px),calc(37.57% - -0.5px) calc(98.43% - 1.94px),calc(85.72% - 1.43px) calc(84.98% - 1.4px),calc(98.16% - 1.93px) calc(36.55% - -0.54px))",
  ];
  return shapes[index % shapes.length];
};

// `::before` jako obramowanie
const ProjectBorder = css`
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  aspect-ratio: 1;
  background-color: var(--backdrop-color);
  clip-path: ${({ index }) => getClipPath(index)};
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 14rem;
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
  width: 100%;

  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards;
  position: relative;

  @media (max-width: 64em) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

// Styl obrazu
const ProjectImage = styled.img`
  width: 50%;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 64em) {
    width: 90%;
  }
`;
const Description = styled.p`
  line-height: 1.6;
  font-style: italic;
  font-size: 1.4rem;

  @media (max-width: 48em) {
    line-height: 1.4;
    font-size: 1.3rem;
  }
`;
const ProjectInfo = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &::before {
    ${ProjectBorder}
  }

  @media (max-width: 64em) {
    width: 90%;
    text-align: center;
    align-items: center;
  }
`;

// Przycisk "Pokaż więcej"
const LoadMoreButton = styled.button`
  background: var(--color-flush-orange-600);

  padding: 1rem 2rem;
  border: none;
  border-radius: var(--border-radius-md);

  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: var(--color-flush-orange-500);
  }
`;

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.length / 2);
  const showMoreProjects = () => setVisibleProjects(projects.length);
  const hideMoreProjects = () => setVisibleProjects(projects.length / 2);
  const { t } = useTranslation();
  return (
    <>
      <Title title={t("projects_title")} />
      <Section id="projects">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectContainer
            key={index}
            reversed={index % 2 !== 0}
            index={index}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo index={index}>
              <Heading as={"h2"}>{t(project.title)}</Heading>
              <Description>{t(project.description)}</Description>
              <ButtonGroups>
                {project.demo && (
                  <Button
                    href={project.demo}
                    variations={"secondary"}
                    size={"small"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Demo</span>
                  </Button>
                )}
                {project.code && (
                  <Button
                    href={project.code}
                    variations={"primary"}
                    size={"small"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{t("show_code")}</span>
                  </Button>
                )}
              </ButtonGroups>
            </ProjectInfo>
          </ProjectContainer>
        ))}
        {visibleProjects < projects.length && (
          <LoadMoreButton onClick={showMoreProjects}>
            {t("show_more_projects")}
          </LoadMoreButton>
        )}
        {visibleProjects === projects.length && (
          <LoadMoreButton onClick={hideMoreProjects}>
            {t("hide_more_projects")}
          </LoadMoreButton>
        )}
      </Section>
    </>
  );
};

export default Projects;
