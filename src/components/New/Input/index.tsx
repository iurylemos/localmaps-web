import React from "react";
import { Container, InputStyled } from "./styles";

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: Function;
};

const Input: React.FC<InputProps> = ({ label, name, value, onChange }) => {
  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    onChange((previousState: any) => ({
      ...previousState,
      [name]: event.target.value,
    }));
  }

  return (
    <Container>
      <label>{label}</label>
      <InputStyled required name={name} value={value} onChange={changeInput} />
    </Container>
  );
};

export default Input;
