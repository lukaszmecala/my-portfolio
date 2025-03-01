import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  border: 1px solid var(--color-flush-orange-600);
  border-radius: var(--border-radius-full);
  position: relative;
  width: 38px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("pl");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng); // Ustawiamy widoczność przycisku na podstawie wybranego języka
  };

  return (
    <Wrapper>
      <Button
        onClick={() => changeLanguage(currentLanguage === "pl" ? "en" : "pl")}
      >
        {currentLanguage === "pl" ? "EN" : "PL"}{" "}
        <FontAwesomeIcon icon={faGlobe} />
      </Button>
    </Wrapper>
  );
};

export default LanguageSwitcher;
