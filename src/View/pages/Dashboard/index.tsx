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

import { MdPerson } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <nav>
        <a href="#first">
          <i>
            <IoMdCar />
          </i>
        </a>
        <a href="#second">
          <i>
            <MdPerson />
          </i>
        </a>
        <a href="#third">
          <i>
            <AiFillPieChart />
          </i>
        </a>
      </nav>

      <div className="container">
        <section id="first">
          <Card>
            <Title>
              <IoMdCar
                size={"1.3em"}
                style={{
                  display: "inline",
                  verticalAlign: "bottom",
                }}
              />
              Veículos
            </Title>
            <Column1>
              <div>
                <Subtitle>Dados do veículo</Subtitle>
                <br />
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
                <br />
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
                <br />
                <Input
                  id="standard-basic"
                  name="password"
                  type="date"
                  placeholder="Renavam"
                  style={{width: "100%"}}
                />
              </div>
              <br />
            </Column1>
            <Column2>
              <div>
                <Subtitle>
                  Dados para locação
                </Subtitle>
                <br />
                <Input
                  type="text"
                  id="standard-basic"
                  name="name"
                  placeholder="Valor da diária"
                  style={{
                    width: "100%"
                  }}
                />
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
              <MdPerson
                size={"1.3em"}
                style={{
                  display: "inline",
                  verticalAlign: "bottom",
                }}
              />
              Clientes
            </Title>
            <Column1>
              <div>
                <Subtitle>Dados do cliente</Subtitle>
                <br />
                <Input
                  type="text"
                  id="standard-basic"
                  name="name"
                  placeholder="Nome completo"
                  style={{
                    width: "100%",
                  }}
                />
                <br />
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
              <br />
              <div style={{ whiteSpace: "nowrap" }}>
                <Subtitle>Documentos</Subtitle>
                <br />
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
            </Column1>
            <Column2>
              <div>
                <Subtitle>
                  <label>
                    <input type="checkbox" name="Customer" /> Cliente parceiro ?
                  </label>
                </Subtitle>
                <br />
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
                <br />
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
