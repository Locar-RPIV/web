import { Section, Title, Subtitle, VehicleTypeCard } from "./styles";

import { MdDirectionsBus, MdDirectionsBike } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa";

import { Link } from "react-router-dom";

import NavBar from "../../../../components/NavBar";


const VehicleOptions = () => {
  return (
    <Section>
      <NavBar />
    <VehicleTypeCard style={{ padding: "80px" }}>
      <div>
        <Title>Qual tipo de véiculo você deseja cadastrar ?</Title> <br />
        <br />
        <Subtitle className="vehicle-type">Aceitamos vários tipos</Subtitle>
      </div>
      <div className="band">
        <div className="item-1">
          <Link to="/VehicleRegistration">
            <div className="card">
              <div className="thumb">
                <IoMdCar size={"3em"} />
              </div>
              <article>
                <h1>Carros</h1>
              </article>
            </div>
          </Link>
        </div>
        <div className="item-2">
          <Link to="/VehicleRegistration">
            <div className="card">
              <div className="thumb">
                <MdDirectionsBus size={"3em"} />
              </div>
              <article>
                <h1>Ônibus </h1>
              </article>
            </div>
          </Link>
        </div>
        <div className="item-3">
          <Link to="/VehicleRegistration">
            <div className="card">
              <div className="thumb">
                <MdDirectionsBike size={"3em"} />
              </div>
              <article>
                <h1>Bicicleta </h1>
              </article>
            </div>
          </Link>
        </div>
        <div className="item-4">
          <Link to="/VehicleRegistration">
            <div className="card">
              <div className="thumb">
                <FaMotorcycle size={"3em"} />
              </div>
              <article>
                <h1>Motocicleta</h1>
              </article>
            </div>
          </Link>
        </div>
      </div>
    </VehicleTypeCard>
    </Section>
  );
};

export default VehicleOptions;
