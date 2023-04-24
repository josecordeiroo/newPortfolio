import React from "react";

import styled from "styled-components";

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>José Cordeiro</Logo>
          <List>
            <ListItem>Início</ListItem>
            <ListItem>Experiência</ListItem>
            <ListItem>Setup</ListItem>
            <ListItem>Contato</ListItem>
          </List>
        </Links>
        <Icons>
            <Icon src="./img/search.png"/>
            <Button>Entre em contato</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Logo = styled.h1`
    height: 50px;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
`;
