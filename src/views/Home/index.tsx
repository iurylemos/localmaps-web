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
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>O mapa local da sua cidade</Title>
        <SubTitle>Encontre no comercio local, tudo que precisa</SubTitle>
        <Link to="/new">
          <Button>
            <ButtonBox>{">"}</ButtonBox>
            Cadastre um ponto comercial
          </Button>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
};

export default HomePage;
