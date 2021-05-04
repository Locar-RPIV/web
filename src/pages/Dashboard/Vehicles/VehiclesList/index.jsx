import React, { useState, useEffect } from "react";
import { ListUserCard, Title } from "./styles";

import { IoMdCar } from "react-icons/io";
import Api from "../../../../services/api";

const VehicleList = () => {
  const [automobiles, setAuto] = useState([]);

  const fetchVehicles = async () => {
    const { data } = await Api.get(
      "https://apirestful-locar.herokuapp.com/api/automobile"
    );
    const autos = data;
    setAuto(autos);
    console.log(autos);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <ListUserCard>
      <Title>
        <IoMdCar className="title-icon" size={"1.3em"} />
        Veículos
      </Title>
      <div className="table-content">
        <table>
          <tr>
            <th>Código</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Valor locação</th>
            <th>Status</th>
          </tr>

          {automobiles.map((user) => {
            return [
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.marca}</td>
                  <td>{user.modelo}</td>
                  <td>{user.placa}</td>
                  <td>{user.valorLocacao}</td>
                  <td>{user.status}</td>
                </tr>
              </>,
            ];
          })}
        </table>
      </div>
    </ListUserCard>
  );
};

export default VehicleList;
