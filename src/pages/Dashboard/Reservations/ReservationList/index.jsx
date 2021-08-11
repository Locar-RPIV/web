import React, { useState, useEffect } from "react";
import { IoTicket } from "react-icons/io5";

import api from "../../../../services/api";
import Card from "../../../../components/Card";
import { CardHeader, Title } from "../../../../components/Card/styles";
import EditButton from "../../../../components/Buttons/Edit";
import DeleteButton from "../../../../components/Buttons/Delete";

const ReservationList = () => {
  const [reservations, setReservation] = useState([]);

  const fetchUsers = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/reservation"
    );
    setReservation(data);
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
      alert("Ocorreu um erro ao tentar deletar a reserva");
    }
  }

  return (
    <Card>
      <CardHeader>
        <Title>
          <IoTicket className="title-icon" size={"1.3em"} />
          Reservas
        </Title>
      </CardHeader>
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
                    <EditButton />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton
                      onClick={() => deleteReservation(reservation)}
                    />
                  </td>
                </tr>
              </>,
            ];
          })}
        </table>
      </div>
    </Card>
  );
};

export default ReservationList;
