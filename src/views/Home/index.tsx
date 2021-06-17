import React from "react";
import {
  Container,
  Title,
  Button,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from "./styles";

const HomePage: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>O mapa local da sua cidade</Title>
        <SubTitle>Encontre no comercio local, tudo que precisa</SubTitle>
        <Button>
          <ButtonBox>{">"}</ButtonBox>
          Cadastre um ponto comercial
        </Button>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
};

export default HomePage;
