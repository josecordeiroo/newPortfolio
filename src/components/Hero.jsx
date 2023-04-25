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
            <Subtitle>Sobre mim</Subtitle>
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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;
const AboutMe = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #8e03ff;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #8e03ff;
  color: white;
  font-weight: 500;
  font-size: 18px;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 800px;
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

//update