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
import clientFeedback from "../../assets/clientFeedback.svg";
import { Link } from "react-router-dom"

import Api from "../../services/api";

const FeedbackClient: React.FC = () => {


    return (
        <Container>
            <NavBar />
            <FeedbackCard style={{ padding: "250px"}}>
                <div className="column1">
                    <Title >
                        Cliente cadastrado com sucesso
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
                            <Link to="/Dashboard">Cadastrar outro</Link>
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
                    {/* <Link to= {} /> */}
                </div>
                <div className="column2"><img src={clientFeedback} alt="" /></div>
            </FeedbackCard>
        </Container>
    )
}
export default FeedbackClient;