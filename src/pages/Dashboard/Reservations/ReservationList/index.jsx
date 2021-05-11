import React, { useState, useEffect } from "react";
import { ListUserCard, Title, EditButton, DeleteButton } from "./styles";

import { FaEdit, FaTrashAlt } from "react-icons/fa";

import api from "../../../../services/api";
import { IoTicket } from "react-icons/io5";

const ReservationList = () => {
    const [reservations, setReservation] = useState([]);

    const fetchUsers = async () => {
      const { data } = await api.get(
        "https://apirestful-locar.herokuapp.com/api/reservation"
      );
      const reservations = data;
      setReservation(reservations);
      console.log(reservations);
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
  

    function deleteReservation(reservation) {
      try {
        api
          .delete(
            `https://apirestful-locar.herokuapp.com/api/reservation/${reservation.id}`
          )
          .then((res) => {
            alert("Reserva deletada com sucesso");
            window.location.reload();
          });
      } catch (e) {
        console.log(e);
        alert("Ocorreu um erro ao tentar deletar a reserva");
      }
    }

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
        <th>Ações</th>
      </tr>

      {reservations.map((reservation) => {
        return [
          <>
            <tr>
              <td>{reservation.id}</td>
              <td>{reservation.user.nome}</td>
              <td>{reservation.veiculo.placa}</td>
              <td>{reservation.dataRetirada}</td>
              <td>
                  <EditButton>
                    <FaEdit size={"2em"}/>
                  </EditButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteReservation(reservation)}>
                      <FaTrashAlt size={"2em"}/>
                    </DeleteButton>
              </td>
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
