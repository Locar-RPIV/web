import React, { Component } from "react";
import { Container, MainImage, LoginContainer, Form, Input } from "./styles";

import Api from "../../services/api";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
      console.log("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await Api.post("/auth", { email, password });
        response.request("/Dashboard");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <MainImage />
        <LoginContainer>
          <Form onSubmit={this.handleSignIn}>
            <span className="title">LOCAR</span>
            <span className="subtitle"></span>
            <Input
              type="text"
              placeholder="Usuário"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => this.setState({ password: e.target.value })}
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
}

export default Login;
