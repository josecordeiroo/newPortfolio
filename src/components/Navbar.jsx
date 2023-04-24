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
            <ListItem>Setup</ListItem>
            <ListItem>Experiência</ListItem>
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
  background-color: rebeccapurple;
`;

const Logo = styled.h1`
    
`

const Links = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
`;

const List = styled.ul``;
const ListItem = styled.li``;

const Icons = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
`;

const Icon = styled.img``;
const Button = styled.button``;
