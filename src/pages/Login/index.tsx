import React, { Component } from "react";
import { Container, MainImage, LoginContainer, Form, Input } from "./styles";

import Api from "../../../Services/Api";

const Login: React.FC = () => {

  class SignIn extends Component {
    state = {
      username: "",
      password: "",
      error: ""
    };
  
    handleSignIn = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const { username, password } = this.state;
      if (!username || !password) {
        this.setState({ error: "Preencha e-mail e senha para continuar!" });
      } else {
        try {
          const response = await Api.post("/auth", { username, password });
          response.request("/Dashboard")
        } catch (err) {
          this.setState({
            error:
              "Houve um problema com o login, verifique suas credenciais. T.T"
          });
        }
      }
    };
  
    render() {
      return (
        <Container>
         <MainImage />
          <LoginContainer>
            <span className="title">LOCAR</span>
            <span className="subtitle"></span>
          <Form onSubmit={this.handleSignIn}>
            <input
              type="email"
              placeholder="Usuário"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit" style={{
              backgroundColor: "#336699",
              color: "#fff",
            }}
            >Entrar</button>
          <hr />
          {/* <Link to="/signup">Criar conta grátis</Link> */}
          </Form>
          </LoginContainer>
        </Container>
      );
    }
  }
}

export default Login;
