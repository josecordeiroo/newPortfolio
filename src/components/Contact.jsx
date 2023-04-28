import React from "react";
import styled from "styled-components";

function Contact() {
  return <Section>
    <Container>
      <Left>
        <Form>
          <Title>Entre em contato:</Title>
          <Input placeholder="Nome"/>
          <Input placeholder="E-mail:"/>
          <TextArea placeholder="Escreva sua mensagem:"/>
          <Button>Enviar</Button>
        </Form>
      </Left>
      <Right></Right>
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
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  
`;

const Form = styled.form`
  
`;

const Input = styled.input`
  
`;

const TextArea = styled.textarea`
  
`;

const Button = styled.button`
  
`;


const Right = styled.div`
  flex: 1;
`;
