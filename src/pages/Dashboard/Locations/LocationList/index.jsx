import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";

import api from "../../../../services/api";
import Card from "../../../../components/Card";
import { CardHeader, Title, Button } from "../../../../components/Card/styles";
import EditButton from "../../../../components/Buttons/Edit";
import DeleteButton from "../../../../components/Buttons/Delete";

function deleteLocation(location) {
  try {
    api
      .delete(
        `https://apirestful-locar.herokuapp.com/api/location/${location.id}`
      )
      .then((res) => {
        alert("Locação deletada com sucesso");
        window.location.reload();
      });
  } catch (e) {
    alert("Ocorreu um erro ao tentar deletar a locação");
  }
}

const LocationList = () => {
  const [locations, setLocation] = useState([]);

  const fetchLocations = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/location"
    );
    setLocation(data);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <Card>
      <CardHeader>
        <Title>
          <AiFillPieChart className="title-icon" size={"1.3em"} />
          Locações
        </Title>
        <Link to="/AddLocation">
          <Button>Cadastrar novo</Button>
        </Link>
      </CardHeader>

      <div className="table-content">
        <table>
          <tr>
            <th>Código</th>
            <th>Cliente</th>
            <th>Véiculo</th>
            <th>Data da retirada</th>
            <th>Data da devolução</th>
            <th>Valor Total</th>
            <th>Ações</th>
          </tr>

          {locations.map((location) => {
            return [
              <>
                <tr>
                  <td>{location.id}</td>
                  <td>{location.reserva.user.nome}</td>
                  <td>{location.reserva.veiculo.placa}</td>
                  <td>{location.dataLocacao}</td>
                  <td>{location.dataDevolucao}</td>
                  <td>{location.valorTotal}</td>
                  <td>
                    <EditButton />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteLocation(location)} />
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

export default LocationList;
