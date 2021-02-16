import React from "react";
import { Container, MainImage, LoginContainer, Form, Input } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <MainImage />
      <LoginContainer>
        <Form>
          <span className="title">LOCAR</span>
          <span className="subtitle"></span>

          <Input type="text" id="standard-basic" name="username" placeholder="Usuário"/>

          <Input id="standard-basic" name="password" type="password" placeholder="Senha"/>
          <button
            type="submit"
            style={{
              backgroundColor: "#336699",
              color: "#fff",
            }}
          >
            Continuar
          </button>

          <span className="lost-password">
            Caso você tenha esquecido sua senha, não tem problema. Basta clicar
            aqui.
          </span>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
