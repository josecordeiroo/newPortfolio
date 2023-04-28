import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cube from "./Cube";
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
            Paulistano, 32 anos, formado em Análise e Desenvolvimento de
            Sistemas pela Universidade Anhembi Morumbi e Administração de
            empresas pela Faculdade FMU.
          </Desc>
          <Button>Conhecer mais</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.8}>
              <MeshDistortMaterial
                color="#6010a1"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
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
  margin-top: -20px;
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
