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
  FeedbackCard,
  VehicleTypeCard,
} from "./styles";

import NavBar from "../../components/NavBar";

import { MdPerson, MdDirectionsBus, MdDirectionsBike } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa";
import vehicleFeedback from "../../assets/vehicleFeedback.svg";
import {Link} from "react-router-dom"

import Api from "../../services/api";

const Dashboard: React.FC = () => {

  return (
    <Container>
      <NavBar />
      <div className="container">
        <section id="first">
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
                    <h1><Link to="/VehicleRegistration">Carros </Link></h1>
                  </article>
                </div>
              </div>
              <div className="item-2">
                <div className="card">
                  <div className="thumb"><MdDirectionsBus size={"3em"} /></div>
                  <article>
                    <h1><Link to="/VehicleRegistration">Ônibus </Link></h1>
                  </article>
                </div>
              </div>
              <div className="item-3">
                <div className="card">
                  <div className="thumb"><MdDirectionsBike size={"3em"} /></div>
                  <article>
                    <h1><Link to="/VehicleRegistration">Bicicleta </Link></h1>
                  </article>
                </div>
              </div>
              <div className="item-4">
                <div className="card">
                  <div className="thumb"><FaMotorcycle size={"3em"} /></div>
                  <article>
                    <h1><Link to="/VehicleRegistration">Motocicleta </Link></h1>
                  </article>
                </div>
              </div>
            </div>
          </VehicleTypeCard>
        </section>

        <section id="second">
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
                      onChange={e => ({ name: e.target.value })}
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
                      onChange={e => ({ birthDate: e.target.value })}
                      placeholder="Data de nascimento"
                    />
                    <Input
                      id="standard-basic"
                      name="client_telephone"
                      type="text"
                      onChange={e => ({ telephone: e.target.value })}
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
                      onChange={e => ({ cpf: e.target.value })}
                      placeholder="CPF"
                    />
                    <Input
                      id="standard-basic"
                      name="client_cnh"
                      type="text"
                      onChange={e => ({ cnh: e.target.value })}
                      placeholder="CNH"
                    />
                    <Input
                      id="standard-basic"
                      name="client_rg"
                      type="text"
                      onChange={e => ({ rg: e.target.value })}
                      placeholder="RG"
                    />
                  </div>
                </div>
                <Button type="submit"><Link to="/FeedbackClient">CADASTRAR</Link></Button>
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
              <div style={{ display: "flex", justifyContent: "flex-end" }}>

              </div>
            </Column2>
          </Card>
        </section>

        <section id="third">
          {/* <VehicleTypeCard style={{ padding: "80px" }}>
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
          </VehicleTypeCard> */}
        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
