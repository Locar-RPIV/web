import React, { useState, useEffect } from "react";
import { ListUserCard, Title } from "./styles";

import { AiFillPieChart } from "react-icons/ai";
import Api from "../../../../services/api";

const LocationList = () => {
  const [reservations, setReservation] = useState([]);

  const fetchUsers = async () => {
    const { data } = await Api.get(
      "https://apirestful-locar.herokuapp.com/api/location"
    );
    const reservations = data;
    setReservation(reservations);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ListUserCard>
      <Title>
        <AiFillPieChart className="title-icon" size={"1.3em"} />
        Locações
      </Title>
      <div className="table-content">
        <table>
          <tr>
            <th>Código</th>
            <th>Cliente</th>
            <th>Véiculo</th>
            <th>Data da retirada</th>
            <th>Data da devolução</th>
            <th>Valor Total</th>
          </tr>

          {reservations.map((reservation) => {
            return [
              <>
                <tr>
                  <td>{reservation.id}</td>
                  <td>{reservation.user.nome}</td>
                  <td>{reservation.veiculo.id}</td>
                  <td>{reservation.dataLocacao}</td>
                  <td>{reservation.dataDevolucao}</td>
                  <td>{reservation.valorTotal}</td>
                </tr>
              </>,
            ];
          })}
        </table>
      </div>
    </ListUserCard>
  );
};

export default LocationList;
