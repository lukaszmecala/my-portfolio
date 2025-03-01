import styled from "styled-components";
import Header from "./Header";

import GlobalStyles from "./styles/GlobalStyles";
import Hero from "./components/Hero";
import BreakLine from "./ui/BreakLine";
import About from "./components/About";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Content = styled.div`
  max-width: 140rem;
  margin: 1.6rem auto 0;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Content>
        <Header />

        <main>
          <Hero />
          <BreakLine id="about" height="2px" marginvertical={"10rem"} />
          <About />
          <BreakLine height="2px" marginvertical={"10rem"} />
          <Services />
          <BreakLine height="2px" marginvertical={"10rem"} />
          <Tech />
          <BreakLine height="2px" marginvertical={"10rem"} />
          <Projects />
          <BreakLine height="2px" marginvertical={"10rem"} />
          <Contact />
        </main>
      </Content>
      <Footer />
    </>
  );
}

export default App;
