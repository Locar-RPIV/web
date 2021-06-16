import React from "react";
import { MdPerson } from "react-icons/md";
import NavBar from "../../../components/NavBar";

import {
  Container,
  Card,
  Title,
  Subtitle,
  Column1,
  Column2,
  Input,
  Button,
} from "./styles";

const Users: React.FC = () => {
  return (
    <Container>
      <NavBar />

      <Card>
        <Title>
          <MdPerson className="title-icon" size={"1.3em"} />
          Clientes
        </Title>
        <Column1>
          <form>
            <div>
              <Subtitle>Dados do cliente</Subtitle>
              <div className="one-input">
                <Input
                  type="text"
                  id="standard-basic"
                  name="client_name"
                  onChange={(e) => ({ name: e.target.value })}
                  placeholder="Nome completo"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div className="two-inputs">
                <Input
                  type="date"
                  id="standard-basic"
                  name="client_birthDate"
                  onChange={(e) => ({ birthDate: e.target.value })}
                  placeholder="Data de nascimento"
                />
                <Input
                  id="standard-basic"
                  name="client_telephone"
                  type="text"
                  onChange={(e) => ({ telephone: e.target.value })}
                  placeholder="Telefone"
                />
              </div>
            </div>
            <br />
            <div style={{ whiteSpace: "nowrap" }}>
              <Subtitle>Documentos</Subtitle>
              <div className="three-inputs">
                <Input
                  type="text"
                  id="standard-basic"
                  name="client_cpf"
                  onChange={(e) => ({ cpf: e.target.value })}
                  placeholder="CPF"
                />
                <Input
                  id="standard-basic"
                  name="client_cnh"
                  type="text"
                  onChange={(e) => ({ cnh: e.target.value })}
                  placeholder="CNH"
                />
                <Input
                  id="standard-basic"
                  name="client_rg"
                  type="text"
                  onChange={(e) => ({ rg: e.target.value })}
                  placeholder="RG"
                />
              </div>
            </div>
            <Button type="submit">CADASTRAR</Button>
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
            <div className="two-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="client_banco"
                placeholder="Banco"
              />
              <Input
                type="text"
                id="standard-basic"
                name="client_agencia"
                placeholder="Agência"
              />
            </div>
            <div className="one-input">
              <Input
                id="standard-basic"
                name="client_contaDv"
                type="text"
                placeholder="Conta com DV"
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
        </Column2>
      </Card>
    </Container>
  );
};

export default Users;
