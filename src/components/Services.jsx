import { motion } from "framer-motion";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import services from "../data/services";
import Row from "../ui/Row";
import Title from "../ui/Title";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rem;
  padding: 6rem 1.6rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: var(--color-flush-orange-500);
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    filter: blur(200px);
    z-index: -10;
    opacity: 0.03;
  }

  @media (max-width: 48em) {
    gap: 8rem;
    padding: 4rem 1rem;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-start" : "flex-end"};
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const Card = styled(motion.div)`
  background-color: var(--color-woodsmoke-950);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: 4rem;
  width: 60%;
  text-align: left;
  color: white;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: calc(100% + 4px);
    background-color: var(--backdrop-color);
    border-radius: var(--border-radius-lg);
    z-index: -4;
  }

  &:hover:before {
    background-color: var(--color-flush-orange-600);
  }

  @media (max-width: 48em) {
    width: 94%;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-style: italic;
`;

const Line = styled(motion.div)`
  position: absolute;
  bottom: -10.6rem;
  left: 50%;
  width: 2px;
  height: ${({ height }) => height || "50px"};
  background-color: var(--backdrop-color);
  z-index: 1;
  transform-origin: top;

  @media (max-width: 768px) {
    height: 50px;
    bottom: -6.5rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: (align) => ({
    x: align === "left" ? -100 : 100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

// Animacja linii
const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 },
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title title={t("services_title")} />

      <Container
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <CardContainer
            key={index}
            align={service.align}
            custom={service.align}
            variants={cardVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon
                icon={service.icon}
                size="2x"
                style={{ marginBottom: "10px" }}
              />
              <Row type="vertical">
                <Heading as={"h5"}>{t(service.title)}</Heading>
                <ServiceDescription>
                  {t(service.description)}
                </ServiceDescription>
              </Row>
            </Card>

            {index < services.length - 1 && (
              <Line
                height="9rem"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.17, 0.67, 0.83, 0.67],
                }}
              />
            )}
          </CardContainer>
        ))}
      </Container>
    </>
  );
};

export default Services;
