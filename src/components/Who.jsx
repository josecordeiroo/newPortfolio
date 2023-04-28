import React from "react";
import styled from "styled-components";

function Who() {
  return (
    <Section>
      <Container>
        <Left>

        </Left>
        <Right>
          <Title>Buscando sempre melhorar</Title>
          <AboutMe>
            <Line src="./img/line.png" />
            <Subtitle>Tecnologias</Subtitle>
          </AboutMe>
          <Desc>
            Trabalho com Javascript e Typescript, usando
            principalmente MERN (React, Node, Express e MongoDB), possuindo
            conhecimento em diversas tecnologias e buscando a evolução constante, aprimorando meus conhecimentos todos os dias.
          </Desc>
          <Button>Veja alguns projetos</Button>
        </Right>
      </Container>
    </Section>
  );
}

//up
export default Who;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  
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
  width: 220px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
