import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";

import Api from "../../../../services/api";
import { MdDirectionsBike } from "react-icons/md";
import NavBar from "../../../../components/NavBar";
import {
  Section,
  Title,
  Subtitle,
  Column1,
  Column2,
  Input,
  Button,
  VehicleTypeCard,
} from "./styles";

const BikecycleRegistration: React.FC = () => {
  const [marca, setBicicletaMarca] = useState("");
  const [modelo, setBicicletaModelo] = useState("");
  const [status, setBicicletaStatus] = useState("Em análise");
  const [cor, setBicicletaCor] = useState("");
  const [tipoVeiculo] = useState("Bicicleta");
  const [assentos, setBicicletaAssentos] = useState("");
  const [valorLocacao, setBicicletaDiaria] = useState("");
  const [carroParceiro, setCarroParceiro] = useState("");
  const [cpfParceiro, setBicicletaCpfParceiro] = useState("");
  const [filial, setBicicletaFilial] = useState(0);
  const [imageUrl, setBicicletaImagemUrl] = useState("");
  const [, setTipoAro] = useState("");
  const [marcha, setMarcha] = useState("");

  const history = useHistory();

  const optionsMarcaBicicleta = [
    { value: "Coli", label: "Coli" },
    { value: "Caloi", label: "Caloi" },
    { value: "Track & Bikes", label: "Track & Bikes" },
    { value: "Vikingx", label: "Vikingx" },
    { value: "Lotus", label: "Lotus" },
    { value: "Monark", label: "Monark" },
  ];

  const optionsFilial = [
    { value: 1, label: "Unidade Alegrete" },
    { value: 3, label: "Unidade Porto Alegre" },
    { value: 2, label: "Unidade São Borja" },
    { value: 4, label: "Unidade Uruguaiana" },
  ];

  const optionsMarcha = [
    { value: "Possui", label: "Possui" },
    { value: "Não possui", label: "Não possui" },
  ];

  const optionsModeloBicicleta = [
    { value: "Ciça", label: "Ciça" },
    { value: "Velox", label: "Velox" },
    { value: "Niner", label: "Niner" },
    { value: "Tuff25", label: "Tuff25" },
    { value: "Aluminium", label: "Aluminium" },
    { value: "Explorer", label: "Explorer" },
    { value: "Barra Circular VB", label: "Barra Circular VB" },
  ];

  const handleSubmitBicicleta = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    try {
      if (
        !modelo ||
        !status ||
        !cor ||
        !valorLocacao ||
        !filial ||
        !imageUrl ||
        !tipoVeiculo ||
        !assentos ||
        !marcha
      ) {
        alert("Preencha todos os campos");
        return;
      } else if (carroParceiro === "on" && cpfParceiro) {
        await Api.post("/bike", {
          marca,
          modelo,
          status,
          cor,
          valorLocacao,
          carroParceiro: true,
          cpfParceiro,
          filial,
          imageUrl,
          tipoVeiculo,
          assentos,
          marcha,
        });
        history.push("/FeedbackVehicle");
      } else if (carroParceiro === "" && !cpfParceiro) {
        await Api.post("/bike", {
          marca,
          modelo,
          status,
          cor,
          valorLocacao,
          carroParceiro: false,
          cpfParceiro: 0,
          filial,
          imageUrl,
          tipoVeiculo,
          assentos,
          marcha,
        });
        history.push("/FeedbackVehicle");
      }
    } catch (err) {
      alert("Ocorreu algum erro ao adicionar o veiculo");
    }
  };
  return (
    <Section>
      <NavBar />
      <VehicleTypeCard style={{ padding: "30px" }}>
        <Title>
          <MdDirectionsBike className="title-icon" size={"1.3em"} />
          Bicicletacicleta
        </Title>
        <Column1>
          <div>
            <Subtitle>Dados do veículo</Subtitle>
            <div className="three-inputs">
              <Select
                options={optionsMarcaBicicleta}
                name="bicicleta_marca"
                placeholder="Marca"
                onChange={(e) => setBicicletaMarca(e!.value)}
              />
              <Select
                options={optionsModeloBicicleta}
                name="bicicleta_modelo"
                placeholder="Modelo"
                onChange={(e) => setBicicletaModelo(e!.value)}
              />
              <Select
                options={optionsMarcha}
                name="bicicleta_marcha"
                placeholder="Possui Marcha"
                onChange={(e) => setMarcha(e!.value)}
              />
            </div>
            <div className="three-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="bicicleta_cor"
                placeholder="Cor"
                onChange={(e) => setBicicletaCor(e.target.value)}
              />
              <Input
                type="text"
                id="standard-basic"
                name="bicicleta_aro"
                placeholder="Aro"
                onChange={(e) => setTipoAro(e.target.value)}
              />
              <Input
                id="standard-basic"
                name="bicicleta_Assentos"
                type="text"
                placeholder="Nº de Assentos"
                style={{ width: "100%" }}
                onChange={(e) => setBicicletaAssentos(e.target.value)}
              />
            </div>
            <div className="three-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="bicicleta_status"
                placeholder="Status"
                onChange={(e) => setBicicletaStatus("Em análise")}
              />
              <Input
                type="text"
                id="standard-basic"
                name="bicicleta_imageUrl"
                placeholder="ImagemUrl"
                onChange={(e) => setBicicletaImagemUrl(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="input-file">Selecionar um arquivo</label>
              <input id="input-file" type="file" value="" />
              <span id="file-name"></span>
            </div>
          </div>
        </Column1>
        <Column2>
          <div>
            <br />
            <br />
            <br />
            <div className="one-input" style={{ whiteSpace: "nowrap" }}>
              <Subtitle>
                <label>
                  <input
                    onChange={(e) => setCarroParceiro(e.target.value)}
                    type="checkbox"
                    name="Customer"
                  />
                  &nbsp;&nbsp;&nbsp; Bicicleta de cliente parceiro?
                </label>
              </Subtitle>
              <Input
                id="standard-basic"
                type="text"
                name="bicicleta_cpfParceiro"
                placeholder="CPF Parceiro"
                onChange={(e) => setBicicletaCpfParceiro(e.target.value)}
              />
            </div>
            <Subtitle>Dados para locação</Subtitle>
            <div className="two-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="bicicleta_diaria"
                placeholder="Valor da diária"
                onChange={(e) => setBicicletaDiaria(e.target.value)}
              />
              <Select
                options={optionsFilial}
                name="bicicleta_filial"
                placeholder="Filial de origem"
                onChange={(e) => setBicicletaFilial(e!.value)}
              />
            </div>
            <br />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleSubmitBicicleta} type="submit">
              CADASTRAR
            </Button>
          </div>
        </Column2>
      </VehicleTypeCard>
    </Section>
  );
};

export default BikecycleRegistration;
