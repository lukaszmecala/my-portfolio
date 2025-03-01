import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.6rem;
      font-weight: 600;
      @media (max-width: 768px) {
        font-size: 4.2rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.6rem;
      font-weight: 600;

      @media (max-width: 48em) {
        font-size: 2.2rem;
      }
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2rem;
      font-weight: 500;

      @media (max-width: 48em) {
        font-size: 1.6rem;
      }
    `}

    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 1.25rem;
      margin-bottom: 0.5rem;

      text-align: left !important;
    `}

    ${(props) =>
    props.type === "title" &&
    css`
      color: var(--color-flush-orange-600);
      text-transform: uppercase;
      margin-bottom: 4rem;
      margin-left: 6rem;
      @media (max-width: 768px) {
        margin-left: 0;
      }
    `}

  
      ${(props) =>
    props.type === "orange" &&
    css`
      color: var(--color-flush-orange-600);
    `}
    line-height:1.4;

  @media (max-width: 57em) {
    text-align: center;
  }
`;

export default Heading;
