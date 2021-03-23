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
import { Link } from "react-router-dom"

import Api from "../../services/api";


const VehicleRegistration: React.FC = () => {

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
                <Link to="/FeedbackVehicle"></Link>
                alert("entrou aq")
            }
        } catch (err) {
            alert("Ocorreu algum erro ao adicionar o imóvel")
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
                        <Button onClick={handleSubmit} type="submit"><Link to="/FeedbackVehicle">CADASTRAR</Link></Button>
                    </div>
                </Column2>
            </Card>
        </Container>
    )
}

export default VehicleRegistration;