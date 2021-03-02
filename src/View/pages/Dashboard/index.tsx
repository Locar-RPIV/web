import React from "react";
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

import NavBar from "../../../components/NavBar";

import { MdPerson } from "react-icons/md";
import { IoMdCar } from "react-icons/io";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NavBar />

      <div className="container">
        <section id="first">
          <Card>
            <Title>
              <IoMdCar className="title-icon" size={"1.3em"} />
              Veículos
            </Title>
            <Column1>
              <div>
                <Subtitle>Dados do veículo</Subtitle>
                <div className="two-inputs">
                  <Input
                    type="text"
                    id="standard-basic"
                    name="name"
                    placeholder="Marca"
                  />
                  <Input
                    type="text"
                    id="standard-basic"
                    name="name"
                    placeholder="Modelo"
                  />
                </div>
                <div className="two-inputs">
                  <Input
                    type="text"
                    id="standard-basic"
                    name="name"
                    placeholder="Ano"
                  />
                  <Input
                    id="standard-basic"
                    name="password"
                    type="date"
                    placeholder="Kilometragem"
                  />
                </div>
                <div className="one-input">
                  <Input
                    id="standard-basic"
                    name="password"
                    type="date"
                    placeholder="Renavam"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </Column1>
            <Column2>
              <div>
                <Subtitle>Dados para locação</Subtitle>
                <div className="one-input">
                  <Input
                    type="text"
                    id="standard-basic"
                    name="name"
                    placeholder="Valor da diária"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <br />
                <br />
                <div style={{ whiteSpace: "nowrap" }}>
                  <Subtitle>
                    <label>
                      <input type="checkbox" name="Customer" />
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    Veículo de cliente parceiro
                  </Subtitle>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button type="submit">CADASTRAR</Button>
              </div>
            </Column2>
          </Card>
        </section>

        <section id="second">
          <Card>
            <Title>
              <MdPerson className="title-icon" size={"1.3em"} />
              Clientes
            </Title>
            <Column1>
              <div>
                <Subtitle>Dados do cliente</Subtitle>
                <div className="one-input">
                  <Input
                    type="text"
                    id="standard-basic"
                    name="name"
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
                    name="name"
                    placeholder="Data de nascimento"
                  />
                  <Input
                    id="standard-basic"
                    name="password"
                    type="date"
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
                    name="name"
                    placeholder="CPF"
                  />
                  <Input
                    id="standard-basic"
                    name="password"
                    type="date"
                    placeholder="CNH"
                  />
                  <Input
                    id="standard-basic"
                    name="password"
                    type="date"
                    placeholder="RG"
                  />
                </div>
              </div>
            </Column1>
            <Column2>
              <div>
                <Subtitle>
                  <label>
                    <input type="checkbox" name="Customer" />
                  </label>
                  &nbsp;&nbsp;&nbsp;
                  Cliente parceiro ?
                </Subtitle>
                <div className="two-inputs">
                  <Input
                    type="text"
                    id="standard-basic"
                    name="name"
                    placeholder="Banco"
                  />
                  <Input
                    type="text"
                    id="standard-basic"
                    name="name"
                    placeholder="Agência"
                  />
                </div>
                <div className="one-input">
                  <Input
                    id="standard-basic"
                    name="password"
                    type="date"
                    placeholder="Conta com DV"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button type="submit">CADASTRAR</Button>
              </div>
            </Column2>
          </Card>
        </section>

        <section id="third">
          <h1>Third</h1>
        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
