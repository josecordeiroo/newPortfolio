import React from "react";
import styled from "styled-components";

const data = ["Javascript", "Typescript", "Node.JS", "React.JS", "Vite.JS"];

function Works() {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => {
              return <ListItem key={item}>{item}</ListItem>;
            })}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
}

export default Works;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul``;
const ListItem = styled.li``;

const Right = styled.div`
  flex: 1;
`;
