import React, { useState, useEffect } from "react";
import { ListUserCard, Title } from "./styles";

import Api from "../../../../services/api";
import { IoTicket } from "react-icons/io5";

const ReservationList = () => {
    const [reservations, setReservation] = useState([]);

    const fetchUsers = async () => {
      const { data } = await Api.get(
        "https://apirestful-locar.herokuapp.com/api/reservation"
      );
      const reservations = data;
      setReservation(reservations);
      console.log(reservations);
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
  return (
    <ListUserCard>
    <Title>
      <IoTicket className="title-icon" size={"1.3em"} />
      Reservas
    </Title>
    <div className="table-content">
    <table>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Véiculo</th>
        <th>Data da retirada</th>
      </tr>

      {reservations.map((reservation) => {
        return [
          <>
            <tr>
              <td>{reservation.id}</td>
              <td>{reservation.user.nome}</td>
              <td>{reservation.placa}</td>
              <td>{reservation.dataRetirada}</td>
            </tr>
          </>,
        ];
      })}
    </table>
    </div>
  </ListUserCard>
  );
};

export default ReservationList;
