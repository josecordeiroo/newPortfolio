import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Desenvolvedor Fullstack</Title>
          <AboutMe>
            <Line src="./img/line.png" />
            <Subtitle></Subtitle>
          </AboutMe>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            fugiat ipsa molestias iusto iste ut dignissimos facilis.
          </Desc>
          <Button>Conhecer mais</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`

`;

const Title = styled.h1`

`;
const AboutMe = styled.div`

`;

const Line = styled.img`

`;

const Subtitle = styled.h2`

`;
const Desc = styled.p`

`;
const Button = styled.button`

`;
const Right = styled.div`

`;

const Img = styled.img`

`;


