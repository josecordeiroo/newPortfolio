import React from "react";
import styled from "styled-components";

import { ComposableMap, Geographies, Geography, Annotation  } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function Contact() {
  return <Section>
    <Container>
      <Left>
        <Form>
          <Title>Entre em contato:</Title>
          <Input placeholder="Nome"/>
          <Input placeholder="E-mail"/>
          <TextArea rows={10} placeholder="Digite sua mensagem"/>
          <Button>Enviar</Button>
        </Form>
      </Left>
      <Right>
      <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
      </Right>
    </Container>
  </Section>;
}

export default Contact;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  background-color: #8e03ff;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`;


const Right = styled.div`
  flex: 1;
`;
