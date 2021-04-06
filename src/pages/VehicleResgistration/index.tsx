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
import { on } from "process";


const VehicleRegistration: React.FC = () => {

    const [marca, setVehicleMarca] = useState("")
    const [modelo, setVehicleModelo] = useState("")
    const [potencia, setVehiclePotencia] = useState("")
    const [placa, setVehiclePlaca] = useState("")
    const [cor, setVehicleCor] = useState("")
    const [ano, setVehicleAno] = useState("")
    const [tipoCombustivel, setVehicleTipo] = useState("")
    const [numeroPortas, setVehiclePortas] = useState("")
    const [quilometragem, setVehicleKilometragem] = useState("")
    const [renavan, setVehicleRenavam] = useState("")
    const [chassi, setVehicleChassi] = useState("")
    const [valorLocacao, setVehicleDiaria] = useState("")
    const [carroParceiro, setCarroParceiro] = useState("")
    const [cpfParceiro, setVehicleCpfParceiro] = useState("")
    const [filial, setVehicleFilial] = useState("")
    const [imageUrl, setVehicleImagemUrl] = useState("")
    

    const history = useHistory();

    const handleSubmitVehicle = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log(marca)
        console.log(modelo)
        console.log(potencia)
        console.log(placa)
        console.log(cor)
        console.log(ano)
        console.log(tipoCombustivel)
        console.log(numeroPortas)
        console.log(quilometragem)
        console.log(renavan)
        console.log(chassi)
        console.log(valorLocacao)
        console.log(carroParceiro)
        console.log(cpfParceiro)
        console.log(filial)
        console.log(imageUrl)
          

        try {
            if (!marca || !modelo || !potencia || !placa || !cor || !ano || !tipoCombustivel || !numeroPortas || !quilometragem  || !renavan || !chassi || !valorLocacao || !carroParceiro || !cpfParceiro || !filial || !imageUrl) {
                alert("Preencha todos os campos")
                return;
            } else {
                const response = await Api.post("/automobile", {
                    marca,
                    modelo,
                    potencia,
                    placa,
                    cor,
                    ano,
                    tipoCombustivel,
                    numeroPortas,
                    quilometragem,
                    renavan,
                    chassi,
                    valorLocacao,
                    carroParceiro,
                    cpfParceiro,
                    filial,
                    imageUrl
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
            <div className="container"> 
            <Card style={{ padding: "150px"}}>
                
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
                        <div className="three-inputs">
                            <Input
                                type="text"
                                id="standard-basic"
                                name="vehicle_cor"
                                placeholder="Cor"
                                onChange={(e) => setVehicleCor(e.target.value)}
                                />
                            <Input
                                id="standard-basic"
                                name="vehicle_tipo"
                                type="text"
                                placeholder="Tipo"
                                onChange={(e) => setVehicleTipo(e.target.value)}
                                />
                            <Input
                                id="standard-basic"
                                name="vehicle_nPortas"
                                type="text"
                                placeholder="Nº de Portas"
                                onChange={(e) => setVehiclePortas(e.target.value)}
                                />
                        </div>
                        <div className="two-inputs">
                            <Input
                                id="standard-basic"
                                name="vehicle_renavam"
                                type="text"
                                placeholder="Renavam"
                                style={{ width: "100%" }}
                                onChange={(e) => setVehicleRenavam(e.target.value)}
                            />
                            <Input
                                id="standard-basic"
                                name="vehicle_placa"
                                type="text"
                                placeholder="Placa"
                                style={{ width: "100%" }}
                                onChange={(e) => setVehiclePlaca(e.target.value)}
                            />
                        </div>
                        <div className="two-inputs">
                            <Input
                                type="text"
                                id="standard-basic"
                                name="vehicle_chassi"
                                placeholder="Chassi"
                                onChange={(e) => setVehicleChassi(e.target.value)}
                                />
                                <Input
                                type="text"
                                id="standard-basic"
                                name="vehicle_imageUrl"
                                placeholder="ImagemUrl"
                                onChange={(e) => setVehicleImagemUrl(e.target.value)}
                            />
                        </div>
                    </div>
                </Column1>
                <Column2>
                    <div>
                        <br />
                        <br />
                        <br />
                        <div className="one-input" style={{ whiteSpace: "nowrap" }}>
                            <Subtitle>
                                <label>
                                    <input onChange={(e) => setCarroParceiro(e.target.value)} type="checkbox" name="Customer" />
                                    &nbsp;&nbsp;&nbsp; Veículo de cliente parceiro?
                                </label>
                            </Subtitle>
                            <Input
                                id="standard-basic"
                                type="text"
                                name="vehicle_cpfParceiro"
                                placeholder="CPF Parceiro"
                                onChange={(e) => setVehicleCpfParceiro(e.target.value)}
                            />
                        </div>
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
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button onClick={handleSubmitVehicle} type="submit">CADASTRAR</Button>
                    </div>
                </Column2>
            </Card>
            </div>
        </Container>
    )
}

export default VehicleRegistration;