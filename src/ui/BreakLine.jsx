import styled from "styled-components";

const BreakLine = styled.div`
  width: 100%;
  height: ${(props) => props.height || "1px"};
  opacity: 0.1;
  background-color: var(--color-woodsmoke-300);
  margin: ${(props) => props.marginvertical || "2rem"} 0;

  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

export default BreakLine;
