import styled from "styled-components";

const ButtonGroups = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 57em) {
    justify-content: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 48em) {
    margin-top: 1.6rem;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
  }
`;

export default ButtonGroups;
