import React, { useState } from "react";
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
// import vehicleFeedback from "../../assets/vehicleFeedback.svg";
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'

import Api from "../../services/api";

const Dashboard: React.FC = () => {

  const history = useHistory();

  const [nome, setClientName] = useState("")
  const [dataNascimento, setClientBirthDate] = useState("")
  const [cpf, setClientCpf] = useState("")
  const [telefone, setClientPhone] = useState("")
  const [cnh, setClientCnh] = useState("")
  const [rg, setClientRg] = useState("")
  const [partner, setIsPartner] = useState("")
  const [email, setClientEmail] = useState("")
  const [numeroPis, setEmployerNumeroPis] = useState("")


  const handleSubmitClients = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {

      if (!nome || !dataNascimento || !cpf || !telefone || !email) {
        alert("Preencha todos os campos")
        return;
      } else if (rg && cnh) {
        const responsePartner = await Api.post("/partner", {
          cpf,
          nome,
          telefone,
          dataNascimento,
          email,
          cnh,
          rg
        });
        history.push("/FeedbackClient");
      } else if (!rg && cnh) {
        const responseClient = await Api.post("/client", {
          cpf,
          nome,
          telefone,
          dataNascimento,
          email,
          cnh
        });
        history.push("/FeedbackClient");
      } else if (numeroPis) {
        const responseEmployer = await Api.post("/employer", {
          cpf,
          nome,
          telefone,
          dataNascimento,
          email,
          numeroPis
        });
        history.push("/FeedbackClient");
      }

    } catch (err) {
      alert("Ocorreu algum erro ao adicionar o cliente")
    }
  };

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
                <Link to="/VehicleRegistration"><div className="card">
                  <div className="thumb"><IoMdCar size={"3em"} /></div>
                  <article>
                    <h1>Carros</h1>
                  </article>
                </div>
                </Link>
              </div>
              <div className="item-2">
                <Link to="/BusRegistration"><div className="card">
                  <div className="thumb"><MdDirectionsBus size={"3em"} /></div>
                  <article>
                    <h1>Ônibus </h1>
                  </article>
                </div>
                </Link>
              </div>
              <div className="item-3">
                <Link to="/BicicletaRegistration"><div className="card">
                  <div className="thumb"><MdDirectionsBike size={"3em"} /></div>
                  <article>
                    <h1>Bicicleta </h1>
                  </article>
                </div>
                </Link>
              </div>
              <div className="item-4">
                <Link to="/MotoRegistration"><div className="card">
                  <div className="thumb"><FaMotorcycle size={"3em"} /></div>
                  <article>
                    <h1>Motocicleta</h1>
                  </article>
                </div>
                </Link>
              </div>
            </div>
          </VehicleTypeCard>
        </section>

        <section id="second">
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
                  placeholder="Numero Pis"
                />
                {/* <div className="two-inputs">
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
                </div> */}
              </div>
              <Button onClick={handleSubmitClients} type="submit">CADASTRAR</Button>
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
          </VehicleTypeCard> */}
        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
