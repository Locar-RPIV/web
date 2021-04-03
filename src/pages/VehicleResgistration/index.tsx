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
import { useHistory } from 'react-router-dom'

import Api from "../../services/api";


const VehicleRegistration: React.FC = () => {

    const [marca, setVehicleMarca] = useState("")
    const [modelo, setVehicleModelo] = useState("")
    const [ano, setVehicleAno] = useState("")
    const [kilometragem, setVehicleKilometragem] = useState("")
    const [potencia, setVehiclePotencia] = useState("")
    const [renavam, setVehicleRenavam] = useState("")
    const [diaria, setVehicleDiaria] = useState("")
    const [filial, setVehicleFilial] = useState("")

    const history = useHistory();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
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
                    history.push("/FeedbackVehicle");
                    alert("chegou aq")                    
            }
            
        } catch (err) {
            alert("Ocorreu algum erro ao adicionar o veiculo")
        }
    };
    
    return (
        <Container>
            <NavBar />
            <Card style={{ padding: "250px"}}>
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
                                onChange={(e) => setVehicleMarca(e.target.value)}
                            />
                            <Input
                                type="text"
                                id="standard-basic"
                                name="vehicle_modelo"
                                placeholder="Modelo"
                                onChange={(e) => setVehicleModelo(e.target.value)}
                            />
                        </div>
                        <div className="three-inputs">
                            <Input
                                type="text"
                                id="standard-basic"
                                name="vehicle_ano"
                                placeholder="Ano"
                                onChange={(e) => setVehicleAno(e.target.value)}
                            />
                            <Input
                                id="standard-basic"
                                name="vehicle_kilometragem"
                                type="text"
                                placeholder="Kilometragem"
                                onChange={(e) => setVehicleKilometragem(e.target.value)}
                            />
                            <Input
                                id="standard-basic"
                                name="vehicle_potencia"
                                type="text"
                                placeholder="Potencia"
                                onChange={(e) => setVehiclePotencia(e.target.value)}
                            />
                        </div>
                        <div className="one-input">
                            <Input
                                id="standard-basic"
                                name="vehicle_renavam"
                                type="text"
                                placeholder="Renavam"
                                style={{ width: "100%" }}
                                onChange={(e) => setVehicleRenavam(e.target.value)}
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
                                onChange={(e) => setVehicleDiaria(e.target.value)}
                            />
                            <Input
                                id="standard-basic"
                                type="text"
                                name="vehicle_filial"
                                placeholder="Filial de origem"
                                onChange={(e) => setVehicleFilial(e.target.value)}
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
                        <Button onClick={handleSubmit} type="submit">CADASTRAR</Button>
                    </div>
                </Column2>
            </Card>
        </Container>
    )
}

export default VehicleRegistration;