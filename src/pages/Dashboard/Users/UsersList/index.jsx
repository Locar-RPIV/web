import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";

import { CardHeader, ListUserCard, Button, Title , DeleteButton, EditButton} from "./styles";

import Api from "../../../../services/api";
import { FaEdit,  FaTrashAlt } from "react-icons/fa";
import api from "../../../../services/api";
import UsersEdit from "../UsersEdit";

const UsersList = () => {
  const [clients, setClients] = useState([]);
  const [employers, setEmployers] = useState([]);

  const fetchClients = async () => {
    const { data } = await Api.get(
      "https://apirestful-locar.herokuapp.com/api/client"
    );
    const clients = data;
    setClients(clients);
  };

  const fetchEmployers = async () => {
    const { data } = await Api.get(
      "https://apirestful-locar.herokuapp.com/api/employer"
    );
    const employers = data;
    setEmployers(employers);
  };

  useEffect(() => {
    fetchClients();
    fetchEmployers();
  }, []);

  function editUser() {}

  function deleteUser(user) {
    try {
      api
        .delete(`https://apirestful-locar.herokuapp.com/api/client/${user.cpf}`)
        .then((res) => {
          alert("Usuário deletado com sucesso");
          window.location.reload();
        });
    } catch (e) {
      console.log(e);
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
      console.log(e);
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
      console.log(e);
      alert("Ocorreu um erro ao tentar deletar o Cliente parceiro");
    }
  }

  return (
    <ListUserCard>
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
                  <EditButton onClick={() => UsersEdit(employers)}>
                    <FaEdit size={"2em"}/>
                  </EditButton>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteButton onClick={() => deleteEmployer(employers)}>
                      <FaTrashAlt size={"2em"}/>
                    </DeleteButton>
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

                    <EditButton onClick={() => UsersEdit(user)}>
                      <FaEdit size={"2em"}/>
                    </EditButton>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <DeleteButton
                      onClick={() =>
                        user.rg ? deletePartner(user) : deleteUser(user)
                      }
                    >
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

export default UsersList;
