import styled from "styled-components";

function Layout() {
  const LayoutContainer = styled.div`
    max-width: 140rem;
    background-color: var(--color-woodsmoke-800);
    height: 100dvh;
  `;

  return <LayoutContainer></LayoutContainer>;
}

export default Layout;
