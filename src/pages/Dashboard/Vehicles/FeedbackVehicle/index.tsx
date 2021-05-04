import React from "react";
import {
    Container,
    Section,
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

import NavBar from "../../../../components/NavBar";

import { MdPerson, MdDirectionsBus, MdDirectionsBike } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa";
import vehicleFeedback from "../../../../assets/vehicleFeedback.svg";
import { Link } from "react-router-dom"

import Api from "../../../../services/api";

const FeedbackVehicle: React.FC = () => {

    return (
        <Section>
            <NavBar />
            <FeedbackCard style={{ padding: "50px"}}>
                <div className="column1">
                    <Title >
                        Veículo cadastrado com sucesso
                    </Title>
                    <Subtitle>
                        O que deseja fazer agora?
                    </Subtitle>
                    <br />
                    <div>
                        <br />
                        <button
                            type="submit"
                            style={{
                                border: "none",
                                fontSize: "20px",
                                backgroundColor: "#FFFAFA",
                                color: "#1E90FF",
                                font: "arial"
                            }}>
                            <Link to="/VehicleRegistration">Cadastrar outro</Link>
                        </button>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                        <button
                            type="submit"
                            style={{
                                border: "none",
                                fontSize: "20px",
                                backgroundColor: "#FFFAFA",
                                color: "#1E90FF",
                                font: "arial"
                            }}>
                            <Link to="/Dashboard">Voltar ao inicio</Link>
                        </button>
                    </div>
                </div>
                <div className="column2"><img src={vehicleFeedback} alt="" /></div>
            </FeedbackCard>
        </Section>
    )
}

export default FeedbackVehicle;