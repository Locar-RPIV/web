import React from "react";
import { Link } from "react-router-dom";

import {
  Section,
  Title,
  Subtitle,
  FeedbackCard,
} from "./styles";
import NavBar from "../../../../components/NavBar";
import vehicleFeedback from "../../../../assets/vehicleFeedback.svg";

const FeedbackVehicle: React.FC = () => {
  return (
    <Section>
      <NavBar />
      <FeedbackCard style={{ padding: "50px" }}>
        <div className="column1">
          <Title>Veículo cadastrado com sucesso</Title>
          <Subtitle>O que deseja fazer agora?</Subtitle>
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
                font: "arial",
              }}
            >
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
                font: "arial",
              }}
            >
              <Link to="/Dashboard">Voltar ao inicio</Link>
            </button>
          </div>
        </div>
        <div className="column2">
          <img src={vehicleFeedback} alt="" />
        </div>
      </FeedbackCard>
    </Section>
  );
};

export default FeedbackVehicle;
