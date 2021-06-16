import React, { useState, useEffect } from "react";
import { Button, CardHeader, ListVehiclesCard, Title, EditButton, DeleteButton} from "./styles";
import { Link } from "react-router-dom";


import { FaEdit, FaTrashAlt } from "react-icons/fa";


import { IoMdCar } from "react-icons/io";
import api from "../../../../services/api";

function deleteAuto(automobile) {
  try {
    api
      .delete(
        `https://apirestful-locar.herokuapp.com/api/automobile/${automobile.id}`
      )
      .then((res) => {
        alert("Automovel deletado com sucesso");
        window.location.reload();
      });
  } catch (e) {
    console.log(e);
    alert("Ocorreu um erro ao tentar deletar o automovel");
  }
}

const VehicleList = () => {
  const [automobiles, setAuto] = useState([]);

  const fetchVehicles = async () => {
    const { data } = await api.get(
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
    <ListVehiclesCard>
      <CardHeader>
        <Title>
          <IoMdCar className="title-icon" size={"1.3em"} />
          Veículos
        </Title>
        <Link to="/VehicleOptions">
        <Button>Cadastrar novo</Button>
        </Link>
      </CardHeader>

      <div className="table-content">
        <table>
          <tr>
            <th>Código</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Valor locação</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>

          {automobiles.map((automobile) => {
            return [
              <>
                <tr>
                  <td>{automobile.id}</td>
                  <td>{automobile.marca}</td>
                  <td>{automobile.modelo}</td>
                  <td>{automobile.placa}</td>
                  <td>{automobile.valorLocacao}</td>
                  <td>{automobile.status}</td>
                  <td>
                  <EditButton>
                    <FaEdit size={"2em"}/>
                  </EditButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteAuto(automobile)}>
                      <FaTrashAlt size={"2em"}/>
                    </DeleteButton>
                  </td>
                </tr>
              </>,
            ];
          })}
        </table>
      </div>
    </ListVehiclesCard>
  );
};

export default VehicleList;
