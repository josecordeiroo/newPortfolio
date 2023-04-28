import React from "react";

import styled from "styled-components";

import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Test from "./components/Test";

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  background-color: purple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;
