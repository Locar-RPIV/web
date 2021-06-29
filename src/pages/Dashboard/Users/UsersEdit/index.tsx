import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { useHistory } from "react-router-dom";

import Api from "../../../../services/api";
import NavBar from "../../../../components/NavBar";
import {
  Section,
  Card,
  Title,
  Subtitle,
  Column1,
  Column2,
  Input,
  Button,
} from "./styles";

function UsersEdit(users) {
  const history = useHistory();

  const [nome, setClientName] = useState("");
  const [dataNascimento, setClientBirthDate] = useState("");
  const [cpf, setClientCpf] = useState("");
  const [telefone, setClientPhone] = useState("");
  const [cnh, setClientCnh] = useState("");
  const [rg, setClientRg] = useState("");
  const [email, setClientEmail] = useState("");
  const [numeroPis, setEmployerNumeroPis] = useState("");

  const handleSubmitClients = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      if (!nome || !dataNascimento || !cpf || !telefone || !email) {
        alert("Preencha todos os campos");
        return;
      } else if (rg && cnh) {
        await Api.post("/partner", {
          cpf,
          nome,
          telefone,
          dataNascimento,
          email,
          cnh,
          rg,
        });
        history.push("/FeedbackClient");
      } else if (!rg && cnh && !numeroPis) {
        await Api.post("/client", {
          cpf,
          nome,
          telefone,
          dataNascimento,
          email,
          cnh,
        });
        history.push("/FeedbackClient");
      } else if (numeroPis) {
        await Api.post("/employer", {
          cpf,
          nome,
          telefone,
          dataNascimento,
          email,
          numeroPis,
        });
        history.push("/FeedbackClient");
      }
    } catch (err) {
      alert("Ocorreu algum erro ao adicionar o cliente");
    }
  };

  return (
    <Section>
      <NavBar />
      <Card>
        <Title>
          <MdPerson className="title-icon" size={"1.3em"} />
          Usuários
        </Title>
        <Column1>
          <form>
            <div>
              <Subtitle>Dados do usuário</Subtitle>
              <div className="one-input">
                <Input
                  type="text"
                  id="standard-basic"
                  name="client_name"
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Nome completo"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div className="two-inputs">
                <Input
                  type="text"
                  id="standard-basic"
                  name="client_birthDate"
                  placeholder="Data de nascimento"
                  onChange={(e) => setClientBirthDate(e.target.value)}
                />
                <Input
                  id="standard-basic"
                  name="client_telephone"
                  type="text"
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="Telefone"
                />
              </div>
              <div className="one-input">
                <Input
                  type="text"
                  id="standard-basic"
                  name="client_email"
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="Email"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <br />
            <div style={{ whiteSpace: "nowrap" }}>
              <Subtitle>Documentos</Subtitle>
              <div className="two-inputs">
                <Input
                  type="text"
                  id="standard-basic"
                  name="client_cpf"
                  onChange={(e) => setClientCpf(e.target.value)}
                  placeholder="CPF"
                />
                <Input
                  id="standard-basic"
                  name="client_cnh"
                  type="text"
                  onChange={(e) => setClientCnh(e.target.value)}
                  placeholder="CNH"
                />
              </div>
            </div>
          </form>
        </Column1>
        <Column2>
          <div>
            <Subtitle>
              <label>
                <input type="checkbox" name="Customer" />
              </label>
              &nbsp;&nbsp;&nbsp; Cliente parceiro ?
            </Subtitle>
            <Input
              id="standard-basic"
              name="client_rg"
              type="text"
              onChange={(e) => setClientRg(e.target.value)}
              placeholder="RG"
            />
            <br />
            <br />
            <Subtitle>
              <label>
                <input type="checkbox" name="Customer" />
              </label>
              &nbsp;&nbsp;&nbsp; Funcionário ?
            </Subtitle>
            <Input
              id="standard-basic"
              name="employer_numeroPis"
              type="text"
              onChange={(e) => setEmployerNumeroPis(e.target.value)}
              placeholder="Número Pis"
            />
          </div>
          <Button onClick={handleSubmitClients} type="submit">
            CADASTRAR
          </Button>
          <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
        </Column2>
      </Card>
    </Section>
  );
}

export default UsersEdit;
