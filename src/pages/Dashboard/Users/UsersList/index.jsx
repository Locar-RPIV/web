import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";

import api from "../../../../services/api";
import UsersEdit from "../UsersEdit";
import Card from "../../../../components/Card";
import { CardHeader, Title, Button } from "../../../../components/Card/styles";
import EditButton from "../../../../components/Buttons/Edit";
import DeleteButton from "../../../../components/Buttons/Delete";

const UsersList = () => {
  const [clients, setClients] = useState([]);
  const [employers, setEmployers] = useState([]);

  const fetchClients = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/client"
    );
    const clients = data;
    setClients(clients);
  };

  const fetchEmployers = async () => {
    const { data } = await api.get(
      "https://apirestful-locar.herokuapp.com/api/employer"
    );
    const employers = data;
    setEmployers(employers);
  };

  useEffect(() => {
    fetchClients();
    fetchEmployers();
  }, []);

  function deleteUser(user) {
    try {
      api
        .delete(`https://apirestful-locar.herokuapp.com/api/client/${user.cpf}`)
        .then((res) => {
          alert("Usuário deletado com sucesso");
          window.location.reload();
        });
    } catch (e) {
      alert("Ocorreu um erro ao tentar deletar o usuário");
    }
  }

  function deleteEmployer(employer) {
    try {
      api
        .delete(
          `https://apirestful-locar.herokuapp.com/api/employer/${employer.cpf}`
        )
        .then((res) => {
          alert("Funcionário deletado com sucesso");
          window.location.reload();
        });
    } catch (e) {
      alert("Ocorreu um erro ao tentar deletar o funcionário");
    }
  }

  function deletePartner(partner) {
    try {
      api
        .delete(
          `https://apirestful-locar.herokuapp.com/api/partner/${partner.rg}`
        )
        .then((res) => {
          alert("Cliente parceiro deletado com sucesso");
          window.location.reload();
        });
    } catch (e) {
      alert("Ocorreu um erro ao tentar deletar o Cliente parceiro");
    }
  }

  return (
    <Card>
      <CardHeader>
        <Title>
          <MdPerson className="title-icon" size={"1.3em"} />
          Usuários
        </Title>
        <Link to="/ClientsRegistration">
          <Button>Cadastrar novo</Button>
        </Link>
      </CardHeader>

      <div className="table-content">
        <table>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>

          {employers.map((employers) => {
            return [
              <>
                <tr>
                  <td>{employers.id}</td>
                  <td>{employers.nome}</td>
                  <td>{employers.cpf}</td>
                  <td>Funcionários</td>
                  <td>
                    <EditButton onClick={() => UsersEdit(employers)} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteEmployer(employers)} />
                  </td>
                </tr>
              </>,
            ];
          })}
          {clients.map((user) => {
            return [
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.cpf}</td>
                  <td>{user.rg ? "Cliente parceiro" : "Cliente"}</td>
                  <td>
                    <EditButton onClick={() => UsersEdit(user)} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton
                      onClick={() =>
                        user.rg ? deletePartner(user) : deleteUser(user)
                      }
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

export default UsersList;
