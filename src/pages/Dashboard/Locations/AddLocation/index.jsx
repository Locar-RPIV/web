import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";

import {
  Section,
  Card,
  Title,
  Subtitle,
  Column1,
  Column2,
  Input,
  Button,
} from "./styles";
import NavBar from "../../../../components/NavBar";
import Api from "../../../../services/api";

const AddLocation = () => {
  const history = useHistory();

  const [reserva, setIdReserva] = useState("");
  const [dataLocacao, setDataLocacao] = useState("");
  const [dataDevolucao, setDataDevolucao] = useState("");
  const [valorLocacao, setValorLocacao] = useState("");
  const [valorCaucao, setValorCaucao] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [duracao, setDuracao] = useState("");
  const [quilometragemLocacao, setQuilometragemInicio] = useState("");
  const [quilometragemDevolucao, setQuilometragemFim] = useState("");

  const handleSubmitLocations = async (e) => {
    e.preventDefault();

    try {
      if (
        !reserva ||
        !dataLocacao ||
        !dataDevolucao ||
        !valorLocacao ||
        !valorCaucao ||
        !duracao ||
        !quilometragemLocacao ||
        !quilometragemDevolucao
      ) {
        alert("Preencha todos os campos");
        return;
      } else {
        let total = Number(duracao * valorLocacao) + Number(valorCaucao);

        setValorTotal(total);

        await Api.post("/location", {
          reserva: {
            id: reserva,
          },
          dataLocacao,
          dataDevolucao,
          valorLocacao,
          valorCaucao,
          valorTotal,
          duracao,
          quilometragemLocacao,
          quilometragemDevolucao,
        });
        history.push("/Dashboard#fourth");
      }
    } catch (err) {
      alert("Ocorreu algum erro ao finalizar a locação");
    }
  };

  return (
    <Section>
      <NavBar />
      <Card>
        <Title>
          <AiFillPieChart className="title-icon" size={"1.3em"} />
          Locações
        </Title>
        <Column1>
          <form>
            <div>
              <Subtitle>Dados da reserva</Subtitle>
              <div className="one-input">
                <Input
                  type="text"
                  id="standard-basic"
                  name="id_reserva"
                  onChange={(e) => setIdReserva(e.target.value)}
                  placeholder="ID da reserva"
                />
              </div>
            </div>
            <br />
            <div style={{ whiteSpace: "nowrap" }}>
              <Subtitle>Dados da locação</Subtitle>
              <div className="three-inputs">
                <Input
                  type="text"
                  id="standard-basic"
                  name="Data Locação"
                  onChange={(e) => setDataLocacao(e.target.value)}
                  placeholder="Data locação"
                />
                <Input
                  id="standard-basic"
                  name="Data Devolução"
                  type="text"
                  onChange={(e) => setDataDevolucao(e.target.value)}
                  placeholder="Data devolução"
                />
                <Input
                  id="standard-basic"
                  name="duracao"
                  type="text"
                  onChange={(e) => setDuracao(e.target.value)}
                  placeholder="Duração"
                />
              </div>
            </div>
          </form>
        </Column1>
        <Column2>
          <div style={{ whiteSpace: "nowrap" }}>
            <Subtitle>Dados do veículo</Subtitle>
            <div className="two-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="quilometragemInicio"
                onChange={(e) => setQuilometragemInicio(e.target.value)}
                placeholder="Quilometragem início"
              />
              <Input
                id="standard-basic"
                name="quilometragemFim"
                type="text"
                onChange={(e) => setQuilometragemFim(e.target.value)}
                placeholder="Quilometragem de fim"
              />
            </div>
          </div>
          <Subtitle>Valores</Subtitle>
          <div className="three-inputs">
            <Input
              id="standard-basic"
              name="Valor locação"
              type="text"
              onChange={(e) => setValorLocacao(e.target.value)}
              placeholder="Valor locação"
            />
            <Input
              id="standard-basic"
              name="valorCaucao"
              type="text"
              onChange={(e) => setValorCaucao(e.target.value)}
              placeholder="Valor do caução"
            />
            <Input
              id="standard-basic"
              name="valorTotal"
              type="text"
              style={{
                backgroundColor: "#fff",
              }}
              placeholder="Valor Total"
              onChange={(e) => setValorTotal(e.target.value)}
            />
          </div>
          <Button type="submit" onClick={handleSubmitLocations}>
            FINALIZAR LOCAÇÃO
          </Button>
          <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
        </Column2>
      </Card>
    </Section>
  );
};

export default AddLocation;
