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
} from "./styles";

import NavBar from "../../components/NavBar";

import { MdPerson, MdDirectionsBus, MdDirectionsBike } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa";
import vehicleFeedback from "../../assets/vehicleFeedback.svg";
import {Link} from "react-router-dom"

import Api from "../../services/api";

const Dashboard: React.FC = () => {

  const state = {
    client_name: "",
    client_birthDate: "",
    client_telephone: "",
    client_cpf: "",
    client_cnh: "",
    client_rg: ""
  };


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const { client_name, client_birthDate, client_telephone, client_cpf, client_cnh, client_rg } = state;

      console.log(client_name)
      console.log(client_birthDate)
      console.log(client_telephone)
      console.log(client_cpf)
      console.log(client_cnh)
      console.log(client_rg)

      if (!client_name || !client_birthDate || !client_telephone || !client_cpf || !client_cnh || !client_rg) {
        alert("Preencha todos os campos")
        return;
      } else {
        const {
          data: { id }
        } = await Api.post("/client", {
          client_name,
          client_birthDate,
          client_telephone,
          client_cpf,
          client_cnh,
          client_rg
        });

        await Api.post(`/client/${id}`);
        alert("entrou aq")
      }
    } catch (err) {
      alert("Ocorreu algum erro ao adicionar o imóvel")
    }
  };

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
                    name="vehicle_marca"
                    placeholder="Marca"
                  />
                  <Input
                    type="text"
                    id="standard-basic"
                    name="vehicle_modelo"
                    placeholder="Modelo"
                  />
                </div>
                <div className="three-inputs">
                  <Input
                    type="text"
                    id="standard-basic"
                    name="vehicle_ano"
                    placeholder="Ano"
                  />
                  <Input
                    id="standard-basic"
                    name="vehicle_kilometragem"
                    type="text"
                    placeholder="Kilometragem"
                  />
                  <Input
                    id="standard-basic"
                    name="vehicle_potencia"
                    type="text"
                    placeholder="Potencia"
                  />
                </div>
                <div className="one-input">
                  <Input
                    id="standard-basic"
                    name="vehicle_renavam"
                    type="text"
                    placeholder="Renavam"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </Column1>
            <Column2>
              <div>
                <Subtitle>Dados para locação</Subtitle>
                <div className="two-inputs">
                  <Input
                    type="text"
                    id="standard-basic"
                    name="vehicle_diaria"
                    placeholder="Valor da diária"
                  />
                  <Input
                    id="standard-basic"
                    type="text"
                    name="vehicle_filial"
                    placeholder="Filial de origem"
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
                <Button type="submit">CADASTRAR </Button>
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

              <form onSubmit={handleSubmit} >

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
          <FeedbackCard>
            <div className="column1">
              <Title >
                Veículo cadastrado com sucesso
              </Title>
              <Subtitle>
                O que deseja fazer agora ?
              </Subtitle>
              <br />
              <div>
                <br />
                <button 
                type="submit"
                style={{
                  backgroundColor: "#FFFAFA",
                  color: "#000000",
                  font: "arial"
              }}>
                  Cadastrar outro
                </button>
              </div>
              <br />
              <br />
              <hr />
              <br />
              <div>
                <button 
                type="submit"
                style={{
                  backgroundColor: "#FFFAFA",
                  color: "#000000",
                  font: "arial"
              }}>
                  Voltar ao inicio
                </button>
              </div>
            {/* <Link to= {} /> */}
            </div>
            <div className="column2"><img src={vehicleFeedback} alt="" /></div>
          </FeedbackCard>

        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
