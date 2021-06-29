import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import Api from "../../services/api";
import { login } from "../../services/auth";
import { Container, Form, Input, LoginContainer, MainImage } from "./styles";

const Login: React.FC = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const history = useHistory();

  const handleSignIn = async e => {
    e.preventDefault();

    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
      console.log("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await Api.post("/auth", { email, password });
        login(response.data.token)
        history.push('/Dashboard')
      } catch (err) {
        setError('Houve um problema com o login, verifique suas credenciais. T.T')
        console.log("error")
      }
    }
  };

    return (
      <Container>
        <MainImage />
        <LoginContainer>
          <Form onSubmit={handleSignIn}>
            <span className="title">LOCAR</span>
            <span className="subtitle"></span>
            <Input
              type="text"
              placeholder="Usuário"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                color: "#fff",
              }}
            >
              Entrar
            </button>
            <hr />
          </Form>
        </LoginContainer>
      </Container>
    );
}


export default Login;
