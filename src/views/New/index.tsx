import { LatLngExpression, LeafletMouseEvent, Map } from "leaflet";
import React, { FormEvent } from "react";
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
import useGetLocation from "../../hooks/useGetLocation";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

type FormState = {
  name: string;
  description: string;
  contact: string;
  category: string;
  coords: Array<number>;
};

const NewPage: React.FC = () => {
  const history = useHistory();

  const [form, setForm] = useState<FormState>({
    name: "",
    description: "",
    contact: "",
    category: "",
    coords: [0, 0],
  });

  // [function willunmount]
  useEffect(() => {
    return () => {};
  });

  const { coords } = useGetLocation();

  async function onSubmit(ev: FormEvent<HTMLFormElement>): Promise<void> {
    ev.preventDefault();
    const request = await fetch("http://localhost:3000/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        latitude: form.coords[0],
        longitude: form.coords[1],
      }),
    });

    if (request.ok) {
      toast("Estabeleciomento gravado com sucesso!", {
        type: "success",
        autoClose: 2000,
        onClose: () => {
          history.push("/");
        },
      });
    }
  }

  if (!coords) {
    return <h1>Obtendo localização ...</h1>;
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
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
              lat: coords[0],
              lng: coords[1],
            } as LatLngExpression
          }
          zoom={13}
          whenCreated={(map: Map) => {
            map.addEventListener("click", (event: LeafletMouseEvent) => {
              setForm((prev) => ({
                ...prev,
                coords: [event.latlng.lat, event.latlng.lng],
              }));
            });
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[form.coords[0], form.coords[1]] as LatLngExpression}
          />
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
