import "./App.css";
import styled from "styled-components";

//Components
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Who from "./components/who/Who";
import Works from "./components/works/Works";

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;

//Styled
const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
`