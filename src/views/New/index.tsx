import { LatLngExpression } from "leaflet";
import React from "react";
import { useState } from "react";
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
import { Marker, TileLayer } from "react-leaflet";
import { categories, Category } from "../../utils/categories";

type FormState = {
  name: string;
  description: string;
  contact: string;
  category: string;
};

const NewPage: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    description: "",
    contact: "",
    category: "",
  });

  return (
    <Container>
      <Form>
        <FormTitle>Cadastro de comércio local</FormTitle>
        <Section>Dados</Section>
        <Input
          label="Nome do local"
          name="name"
          value={form.name}
          onChange={setForm}
        />
        <Input
          label="Descrição"
          name="description"
          value={form.description}
          onChange={setForm}
        />
        <Input
          label="Contato"
          name="contact"
          value={form.contact}
          onChange={setForm}
        />
        <Section>Endereço</Section>
        <MapContainer
          center={
            {
              lat: 12,
              lng: 23,
            } as LatLngExpression
          }
          zoom={13}
          whenCreated={() => {}}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[12, 23] as LatLngExpression} />
        </MapContainer>
        <Section>Categoria</Section>
        <CategoryContainer>
          {categories.map((item: Category, idx: number) => (
            <CategoryBox
              key={idx + Math.random()}
              onClick={() => {
                setForm((prev) => ({
                  ...prev,
                  category: item.key,
                }));
              }}
              isActive={form.category === item.key ? true : false}
            >
              <CategoryImage src={item.url} />
              {item.label}
            </CategoryBox>
          ))}
        </CategoryContainer>
        <ButtonContainer>
          <Button type="submit">Salvar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default NewPage;
