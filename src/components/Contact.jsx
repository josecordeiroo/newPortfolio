import React from "react";
import styled from "styled-components";
import Map from "./Map";

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
      <Map/>
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
