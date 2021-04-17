import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import Api from "../../services/api";
import { login } from "../../services/auth";
import { Container, Form, Input, LoginContainer, MainImage } from "./styles";
import bcrypt from "bcryptjs";

const Login: React.FC = () => {

  const [email, setEmail] = useState("")
  const [passwordInput, setPassword] = useState("")
  const [error, setError] = useState("")

  const history = useHistory();

  const handleSignIn = async e => {
    e.preventDefault();

    if (!email || !passwordInput) {
      setError("Preencha e-mail e senha para continuar!");
      console.log("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(passwordInput, salt);
        const password = hash;
        const response = await Api.post("/auth", { email, password });
        login(response.data.token)
        // eslint-disable-next-line no-restricted-globals
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
            {/* <Link to="/signup">Criar conta grátis</Link> */}
          </Form>
        </LoginContainer>
      </Container>
    );
}


export default Login;
