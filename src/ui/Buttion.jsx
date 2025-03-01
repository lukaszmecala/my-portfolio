import styled, { css } from "styled-components";

const size = {
  small: css`
    font-size: 1.4rem;
    line-height: 1.6;
    padding: 0.8rem 1.6rem;
    text-transform: uppercase;
    font-weight: 500;

    @media (max-width: 48em) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  `,
  normal: css`
    font-size: 1.6rem;
    line-height: 1.8;
    padding: 1rem 2rem;
    text-transform: uppercase;

    @media (max-width: 48em) {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  `,
  smallwithicon: css`
    font-size: 1.4rem;
    line-height: 1.6;
    padding: 0.8rem 1.6rem;

    font-weight: 500;

    @media (max-width: 48em) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-flush-orange-600);
    color: var(--color-white);
    position: relative;
    overflow: hidden;
    transition: background-color 0.6s ease-in-out 1s;
    padding: 0;

    &:hover {
      background-color: transparent;
      transition-delay: 0s;
    }
    &:focus {
      outline: none;
    }
    &::before {
      content: "";
      width: 2px;
      height: 0;
      position: absolute;
      border-radius: var(--border-radius-sm);
      left: 0;
      top: 0;
      background-color: var(--color-flush-orange-600);
      z-index: -1;
      transition: all 0.6s ease-in-out 0.7s;
    }
    &::after {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      border-radius: var(--border-radius-sm);
      left: 0;
      top: 0;
      background-color: var(--color-flush-orange-600);
      z-index: -1;
      transition: all 0.6s ease-in-out 0.7s;
    }
    &:hover::before {
      height: 100%;
      transition-delay: 0s;
    }
    &:hover::after {
      width: 100%;
      transition-delay: 0s;
    }
    span {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0.8rem 1.6rem;
      &::before {
        content: "";
        width: 2px;
        height: 0;
        position: absolute;
        border-radius: var(--border-radius-sm);
        right: 0;
        top: 0;
        background-color: var(--color-flush-orange-600);
        z-index: -1;
        transition: all 0.6s ease-in-out;
        transition-delay: 0s;
      }
      &::after {
        content: "";
        width: 0;
        height: 2px;
        position: absolute;
        border-radius: var(--border-radius-sm);
        left: 0;
        bottom: 0;
        background-color: var(--color-flush-orange-600);
        z-index: -1;
        transition: all 0.6s ease-in-out;
        transition-delay: 0s;
      }
      &:hover::before {
        height: 100%;
        transition-delay: 0.6s;
      }
      &:hover::after {
        width: 100%;
        transition-delay: 0.6s;
      }
    }
  `,
  secondary: css`
    background-color: transparent;
    color: var(--color-flush-orange-50);
    border: 1px solid var(--color-flush-orange-600);
    position: relative;
    /* &:hover {
      border: 1px solid var(--color-flush-orange-100);
    } */
    &::before {
      content: "";
      width: 0;
      height: 100%;
      position: absolute;
      border-radius: var(--border-radius-sm);
      left: 0;
      top: 0;
      background-color: var(--color-flush-orange-600);
      z-index: -1;
      transition: all 0.6s ease-in-out;
    }
    &:hover::before {
      width: 100%;
    }
  `,
  withicon: css`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border-radius: 0.5rem;
    transition: all 0.3s ease;

    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-3px);
      border-color: var(--color-flush-orange-600);

      svg {
        color: var(--color-flush-orange-600);
      }
    }

    svg {
      font-size: 1.25rem;
    }
  `,
};

const Button = styled.a`
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  border: none;

  ${(props) => size[props.size]}
  ${(props) => variations[props.variations]}
`;

export default Button;
