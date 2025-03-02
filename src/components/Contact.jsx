import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileDownload,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Heading from "../ui/Heading";
import Button from "../ui/Buttion";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--backdrop-color-white);
  border-radius: var(--border-radius-sm);
  border-top: 1px solid var(--backdrop-color);
  border-bottom: 1px solid var(--backdrop-color);
  @media (max-width: 768px) {
    margin: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ContactCard = styled.div`
  /* background: var(--backdrop-color); */
  backdrop-filter: blur(12px);
  border-radius: var(--border-radius-lg);
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  /* border: 1px solid var(--color-woodsmoke-900); */

  border-left: 1px solid var(--color-flush-orange-600);
  border-right: 1px solid var(--color-flush-orange-600);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: var(--shadow-sm);
  }

  @media (max-width: 48em) {
    margin-top: 1rem;
    &:first-child {
      margin-top: 3rem;
    }
  }
`;

const IconWrapper = styled.div`
  padding: 1.2rem;
  background: var(--backdrop-color);
  border-radius: 0.75rem;
  color: var(--color-flush-orange-600);
  min-width: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: left;
  flex: 1;
`;

const Link = styled.a`
  color: #f8fafc;
  text-decoration: none;
  display: block;
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: var(--color-flush-orange-600);
  }
`;

const Status = styled.span`
  font-size: 0.875rem;
  color: var(--color-flush-orange-600);
  display: block;
  margin-top: 0.5rem;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 4rem 0;
  flex-wrap: wrap;
`;

const LocationNote = styled.p`
  margin-top: 4rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: var(--color-flush-orange-600);
  }
`;

const Contact = () => {
  const { t, i18n } = useTranslation();

  const currentCVFileLanguage =
    i18n.language === "pl"
      ? "/CV Lukasz Mecala.pdf"
      : "/CV Lukasz Mecala EN.pdf";

  return (
    <>
      <Title title={t("contact_title")} />
      <Section id="contact">
        <Container>
          <Heading as={"h2"} type={"orange"}>
            {t("contact_me_title")}
          </Heading>

          <ContactGrid>
            <ContactCard>
              <IconWrapper>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </IconWrapper>
              <Content>
                <Heading as={"h6"}>{t("contact_email")}</Heading>
                <Link href="mailto:lukaszmecala@gmail.com">
                  lukaszmecala@gmail.com
                </Link>
                <Status>{t("contact_reply")}</Status>
              </Content>
            </ContactCard>

            <ContactCard>
              <IconWrapper>
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </IconWrapper>
              <Content>
                <Heading as={"h6"}>{t("contact_phone")}</Heading>
                <Link href="tel:+48696129815">+48 696 129 815</Link>
                <Status>{t("avaliable_status")}</Status>
              </Content>
            </ContactCard>

            <ContactCard>
              <IconWrapper>
                <FontAwesomeIcon icon={faFileDownload} size="lg" />
              </IconWrapper>
              <Content>
                <Heading as={"h6"}>{t("contact_resume")}</Heading>
                <Link href={currentCVFileLanguage} download>
                  {t("download_pdf")}
                </Link>
                <Status>{t("last_update_cv")}</Status>
              </Content>
            </ContactCard>
          </ContactGrid>

          <SocialWrapper>
            <Button
              variations={"withicon"}
              size={"smallwithicon"}
              href="https://github.com/lukaszmecala"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </Button>
            <Button
              variations={"withicon"}
              size={"smallwithicon"}
              href="https://linkedin.com/in/łukasz-męcała-9119bb235"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              <span>LinkedIn</span>
            </Button>
          </SocialWrapper>

          <LocationNote>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {t("contact_location")}
          </LocationNote>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
