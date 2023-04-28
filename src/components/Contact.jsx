import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";

import emailjs from "@emailjs/browser";

function Contact() {
  const ref = useRef();

  const [message, setMessage] = useState({
    status: false,
    text: "",
  });

  function clearInputs() {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm(
        "service_ezau2ds",
        "template_z8o3izl",
        ref.current,
        "ZG1ABvqBgv9swIMND"
      );
        clearInputs();
        setMessage({
          status: true,
          text: "Mensagem enviada com sucesso! Retornarei o mais rápido possível.",
        });
    } catch (error) {
      setMessage({
        status: true,
        text: "Falha ao enviar mensagem. Por favor, tente novamente.",
      });
    }
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Entre em contato</Title>
            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="E-mail" />
            <TextArea
              name="message"
              rows={10}
              placeholder="Digite sua mensagem"
            />
            <Button type="submit">Enviar</Button>
            {message.status && <span>{message.text}</span>}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
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
