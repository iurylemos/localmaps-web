import React from "react";
import Input from "../../components/New/Input";
import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from "./styles";

const NewPage: React.FC = () => {
  return (
    <Container>
      <Form>
        <FormTitle>Cadastro de comércio local</FormTitle>
        <Section>Dados</Section>
        <Input
          label="Nome do local"
          name="name"
          value="algumacoisa"
          onChange={() => {}}
        />
      </Form>
    </Container>
  );
};

export default NewPage;
