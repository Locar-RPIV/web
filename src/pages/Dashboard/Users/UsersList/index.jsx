import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdPerson } from "react-icons/md";

import { ListUserCard, Button, Title } from "./styles";

import Api from "../../../../services/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await Api.get(
      "https://apirestful-locar.herokuapp.com/api/client"
    );
    const users = data;
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ListUserCard>
      <Title>
        <MdPerson className="title-icon" size={"1.3em"} />
        Usuários
      </Title>
      <Link to="/ClientsRegistration">
        <Button type="submit">CADASTRAR</Button>
      </Link>
      <div className="table-content">
          <table>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>CPF</th>
          </tr>

          {users.map((user) => {
            return [
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.cpf}</td>
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
