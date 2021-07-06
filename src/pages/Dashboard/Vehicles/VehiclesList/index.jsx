import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdCar } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import Card from "../../../../components/Card";
import {
  CardHeader,
  Title,
  Button,
  DeleteButton,
  EditButton,
} from "../../../../components/Card/styles";

import api from "../../../../services/api";

function deleteAuto(car) {
  try {
    api
      .delete(
        `https://apirestful-locar.herokuapp.com/api/car/${car.id}`
      )
      .then((res) => {
        alert("Carro deletado com sucesso");
        window.location.reload();
      });
  } catch (e) {
    alert("Ocorreu um erro ao tentar deletar o automovel");
  }
}

const VehicleList = () => {
  const [cars, setCars] = useState([]);
  const [bus, setBus] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [motorcycle, setMotorcycle] = useState([]);

  const fetchCars = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/car"
    );
    setCars(data);
  };

  const fetchBus = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/bus"
    );
    setBus(data);
  };

  const fetchBikes = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/bikes"
    );
    setBikes(data);
  };

  const fetchMotorcycle = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/motorcycle"
    );
    setMotorcycle(data);
  };

  useEffect(() => {
    fetchCars();
    fetchBus();
    fetchBikes();
    fetchMotorcycle();
  }, []);

  return (
    <Card>
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
            <th>Identificação</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Valor locação</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>

          {cars.map((cars) => {
            return [
              <>
                <tr>
                  <td>{cars.placa}</td>
                  <td>Carro</td>
                  <td>{cars.marca}</td>
                  <td>{cars.modelo}</td>
                  <td>{cars.valorLocacao}</td>
                  <td>{cars.status}</td>
                  <td>
                    <EditButton>
                      <FaEdit size={"2em"} />
                    </EditButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteAuto(cars)}>
                      <FaTrashAlt size={"2em"} />
                    </DeleteButton>
                  </td>
                </tr>
              </>,
            ];
          })}
          {motorcycle.map((motorcycle) => {
            return [
              <>
                <tr>
                  <td>{motorcycle.placa}</td>
                  <td>Moto</td>
                  <td>{motorcycle.marca}</td>
                  <td>{motorcycle.modelo}</td>
                  <td>{motorcycle.valorLocacao}</td>
                  <td>{motorcycle.status}</td>
                  <td>
                    <EditButton>
                      <FaEdit size={"2em"} />
                    </EditButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteAuto(motorcycle)}>
                      <FaTrashAlt size={"2em"} />
                    </DeleteButton>
                  </td>
                </tr>
              </>,
            ];
          })}
          {bikes.map((bikes) => {
            return [
              <>
                <tr>
                  <td>{bikes.placa}</td>
                  <td>Bicicleta</td>
                  <td>{bikes.marca}</td>
                  <td>{bikes.modelo}</td>
                  <td>{bikes.valorLocacao}</td>
                  <td>{bikes.status}</td>
                  <td>
                    <EditButton>
                      <FaEdit size={"2em"} />
                    </EditButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteAuto(bikes)}>
                      <FaTrashAlt size={"2em"} />
                    </DeleteButton>
                  </td>
                </tr>
              </>,
            ];
          })}
          {bus.map((bus) => {
            return [
              <>
                <tr>
                  <td>{bus.placa}</td>
                  <td>Ônibus</td>
                  <td>{bus.marca}</td>
                  <td>{bus.modelo}</td>
                  <td>{bus.valorLocacao}</td>
                  <td>{bus.status}</td>
                  <td>
                    <EditButton>
                      <FaEdit size={"2em"} />
                    </EditButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteAuto(bus)}>
                      <FaTrashAlt size={"2em"} />
                    </DeleteButton>
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

export default VehicleList;
