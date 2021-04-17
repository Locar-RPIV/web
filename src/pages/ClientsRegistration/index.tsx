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
import vehicleFeedback from "../../assets/vehicleFeedback.svg";
import { Link } from "react-router-dom"

import Api from "../../services/api";


const ClientsRegistration: React.FC = () => {

  const [marca, setVehicleMarca] = useState("")
  const [modelo, setVehicleModelo] = useState("")
  const [ano, setVehicleAno] = useState("")
  const [kilometragem, setVehicleKilometragem] = useState("")
  const [potencia, setVehiclePotencia] = useState("")
  const [renavam, setVehicleRenavam] = useState("")
  const [diaria, setVehicleDiaria] = useState("")
  const [filial, setVehicleFilial] = useState("")

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // const { client_name, client_birthDate, client_telephone, client_cpf, client_cnh, client_rg } = state;

      if (!marca || !modelo || !ano || !kilometragem || !potencia || !renavam || !diaria || !filial) {
        alert("Preencha todos os campos")
        return;
      } else {
        const response = await Api.post("/automobile", {
          marca,
          modelo,
          ano,
          kilometragem,
          potencia,
          renavam,
          diaria,
          filial
        });

        if (response) {
          <Link to="/FeedbackVehicle"></Link>
          alert("entrou aq")
        }
      }

    } catch (err) {
      alert("Ocorreu algum erro ao adicionar o veiculo")
    }
  };
  console.log("entrou aq");
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
     
    </Container>
  )
}

export default ClientsRegistration;