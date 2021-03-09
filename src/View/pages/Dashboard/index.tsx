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
  VehicleTypeCard,
} from "./styles";

import NavBar from "../../../components/NavBar";

import { MdPerson, MdDirectionsBus, MdDirectionsBike } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import {FaMotorcycle} from "react-icons/fa";

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
                    &nbsp;&nbsp;&nbsp; Veículo de cliente parceiro
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
                  &nbsp;&nbsp;&nbsp; Cliente parceiro ?
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
          <VehicleTypeCard style={{ padding: "80px" }}>
            <div>
              <Title>Qual tipo de véiculo você deseja cadastrar ?</Title> <br />
              <br />
              <Subtitle className="vehicle-type">Aceitamos vários tipos</Subtitle>
            </div>
            <div className="band">
              <div className="item-1">
                <div className="card">
                  <div className="thumb"><IoMdCar size={"3em"} /></div>
                  <article>
                    <h1>Carros</h1>
                  </article>
                </div>
              </div>
              <div className="item-2">
                <div className="card">
                  <div className="thumb"><MdDirectionsBus size={"3em"} /></div>
                  <article>
                    <h1>Ônibus</h1>
                  </article>
                </div>
              </div>
              <div className="item-3">
                <div className="card">
                  <div className="thumb"><MdDirectionsBike size={"3em"} /></div>
                  <article>
                    <h1>Bicicleta</h1>
                  </article>
                </div>
              </div>
              <div className="item-4">
                <div className="card">
                  <div className="thumb"><FaMotorcycle size={"3em"} /></div>
                  <article>
                    <h1>Motocicleta</h1>
                  </article>
                </div>
              </div>
            </div>
          </VehicleTypeCard>
        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
