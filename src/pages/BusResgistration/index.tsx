import React, { useState } from "react";
import Select from "react-select";

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

import NavBar from "../../components/NavBar";

import { MdDirectionsBus } from "react-icons/md";

import { useHistory } from "react-router-dom";

import Api from "../../services/api";

const BusRegistration: React.FC = () => {
  const [marca, setBusMarca] = useState("");
  const [modelo, setBusModelo] = useState("");
  const [potencia, setBusPotencia] = useState("");
  const [status, setBusStatus] = useState("Em análise");
  const [placa, setBusPlaca] = useState("");
  const [cor, setBusCor] = useState("");
  const [ano, setBusAno] = useState("");
  const [tipoVeiculo, setBusTipo] = useState("Ônibus");
  const [numeroPortas, setBusPortas] = useState("");
  const [quilometragem, setBusQuilometragem] = useState("");
  const [renavan, setBusRenavam] = useState("");
  const [chassi, setBusChassi] = useState("");
  const [assentos, setBusAssentos] = useState("");
  const [valorLocacao, setBusDiaria] = useState("");
  const [carroParceiro, setCarroParceiro] = useState("");
  const [cpfParceiro, setBusCpfParceiro] = useState("");
  const [filial, setBusFilial] = useState("");
  const [imageUrl, setBusImagemUrl] = useState("");
  const [cilindradas, setBusCilindradas] = useState("");
  const [portaMalas, setBusPortaMalas] = useState("");
  const [tipoCombustivel, setVehicleCombustivel] = useState("");

  const history = useHistory();

  const optionsMarcaBus = [
    { value: "Iveco", label: "Iveco" },
    { value: "Volvo", label: "Volvo" },
    { value: "Agrale", label: "Agrale" },
    { value: "Scania", label: "Scania" },
    { value: "Jimbei", label: "Jimbei" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "Vokswagen", label: "Vokswagen" },
  ];

  const optionsStatus = [
    { value: "Locado", label: "Locado" },
    { value: "Disponível", label: "Disponível" },
    { value: "Em manutanção", label: "Em manutanção" },
    { value: "Em análise", label: "Em análise" },
  ];

  const optionsNPortas = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  const optionsTipo = [
    { value: 4, label: "Bicicleta" },
    { value: 1, label: "Carro" },
    { value: 3, label: "Moto" },
    { value: 2, label: "Ônibus" },
  ];

  const optionsFilial = [
    { value: 1, label: "Unidade Alegrete" },
    { value: 3, label: "Unidade Porto Alegre" },
    { value: 2, label: "Unidade São Borja" },
    { value: 4, label: "Unidade Uruguaiana" },
  ];

  const optionsModeloCarro = [
    { value: "Sprinter", label: "Sprinter" },
    { value: "Volare W9", label: "Volare W9" }, 
    { value: "Volare W8", label: "Volare W8" }, 
    { value: "Volare DW9", label: "Volare DW9" }, 
    { value: "Volare V8", label: "Volare V8" }, 
    { value: "Volare V6", label: "Volare V6" }, 
    { value: "Masca Gran Midi", label: "Masca Gran Midi" }, 
    { value: "Masca Granvia", label: "Masca Granvia" }, 
    { value: "Comil Campione", label: "Comil Campione" }, 
    { value: "Comil Versatile", label: "Comil Versatile" }, 
    { value: "Masca Granvia", label: "Masca Granvia" },
    { value: "Masca Gran Midi", label: "Masca Gran Midi" },
  ];

  const optionsPotencia = [
    { value: "115 CV", label: "115 CV" },
    { value: "140 CV", label: "140 CV" },
    { value: "146 CV", label: "146 CV" },
    { value: "150 CV", label: "150 CV" },
    { value: "163", label: "163 CV" },

  ];

  const optionsAno = [
    { value: 1990, label: 1990 },
    { value: 1991, label: 1991 },
    { value: 1992, label: 1992 },
    { value: 1993, label: 1993 },
    { value: 1994, label: 1994 },
    { value: 1995, label: 1995 },
    { value: 1996, label: 1996 },
    { value: 1997, label: 1997 },
    { value: 1998, label: 1998 },
    { value: 1999, label: 1999 },
    { value: 2000, label: 2000 },
    { value: 2001, label: 2001 },
    { value: 2002, label: 2002 },
    { value: 2003, label: 2003 },
    { value: 2004, label: 2004 },
    { value: 2005, label: 2005 },
    { value: 2006, label: 2006 },
    { value: 2007, label: 2007 },
    { value: 2008, label: 2008 },
    { value: 2009, label: 2009 },
    { value: 2010, label: 2010 },
    { value: 2011, label: 2011 },
    { value: 2012, label: 2012 },
    { value: 2013, label: 2013 },
    { value: 2014, label: 2014 },
    { value: 2015, label: 2015 },
    { value: 2016, label: 2016 },
    { value: 2017, label: 2017 },
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
  ];

  const optionsCombustivel = [
    { value: 1, label: "Diesel" },
    { value: 6, label: "Híbrido/ Elétrico" },
  ];

  const optionsPortaMalas = [
    { value: "146 Litros", label: "146 Litros" },
    { value: "180 Litros", label: "180 Litros" },
    { value: "257 Litros", label: "257 Litros" },
    { value: "265 Litros", label: "265 Litros" },
    { value: "275 Litros", label: "275 Litros" },
    { value: "276 Litros", label: "276 Litros" },
    { value: "285 Litros", label: "285 Litros" },
    { value: "289 Litros", label: "289 Litros" },
    { value: "300 Litros", label: "300 Litros" },
    { value: "313 Litros", label: "313 Litros" },
    { value: "320 Litros", label: "320 Litros" },
    { value: "334 Litros", label: "334 Litros" },
    { value: "359 Litros", label: "359 Litros" },
    { value: "363 Litros", label: "363 Litros" },
    { value: "400 Litros", label: "400 Litros" },
    { value: "415 Litros", label: "415 Litros" },
  ];

  const optionsCilindradas = [
    { value: "2.1", label: "2.1" },
    { value: "2.8", label: "2.8" },
    { value: "4.3", label: "4.3" },
    { value: "4.8", label: "4.8" },
  ];

  const handleSubmitBus = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(marca);
    console.log(modelo);
    console.log(status);
    console.log(potencia);
    console.log(placa);
    console.log(cor);
    console.log(ano);
    console.log(tipoCombustivel);
    console.log(numeroPortas);
    console.log(quilometragem);
    console.log(renavan);
    console.log(chassi);
    console.log(valorLocacao);
    console.log(carroParceiro);
    console.log(cpfParceiro);
    console.log(filial);
    console.log(imageUrl);
    console.log(cilindradas);
    console.log(portaMalas);
    console.log(tipoVeiculo);
    console.log(assentos);


    try {
      if (
        !modelo ||
        !status ||
        !potencia ||
        !placa ||
        !cor ||
        !ano ||
        !tipoCombustivel ||
        !numeroPortas ||
        !quilometragem ||
        !renavan ||
        !chassi ||
        !valorLocacao ||
        !cilindradas ||
        !filial ||
        !imageUrl ||
        !portaMalas ||
        !tipoVeiculo ||
        !assentos
      ) {
        alert("Preencha todos os campos");
        return;
      } else if (carroParceiro === "on" && cpfParceiro) {
        const response = await Api.post("/automobile", {
          marca,
          modelo,
          status,
          potencia,
          placa,
          cor,
          ano,
          tipoCombustivel,
          numeroPortas,
          quilometragem,
          renavan,
          chassi,
          valorLocacao,
          carroParceiro: true,
          cpfParceiro,
          cilindradas,
          filial,
          imageUrl,
          portaMalas,
          tipoVeiculo,
          assentos,
        });
        history.push("/FeedbackVehicle");

        console.log(response);
      } else if (carroParceiro === "" && !cpfParceiro) {
        const response = await Api.post("/automobile", {
          marca,
          modelo,
          status,
          potencia,
          placa,
          cor,
          ano,
          tipoCombustivel,
          numeroPortas,
          quilometragem,
          renavan,
          chassi,
          valorLocacao,
          carroParceiro: false,
          cpfParceiro: 0,
          cilindradas,
          filial,
          imageUrl,
          portaMalas,
          tipoVeiculo,
          assentos,
        });
        history.push("/FeedbackVehicle");
        console.log(response);
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
          <MdDirectionsBus className="title-icon" size={"1.3em"} />
          Ônibus
        </Title>
        <Column1>
          <div>
            <Subtitle>Dados do veículo</Subtitle>
            <div className="three-inputs">
              <Select
                options={optionsMarcaBus}
                name="bus_marca"
                placeholder="Marca"
                onChange={(e) => setBusMarca(e.value)}
              />
              <Select
                options={optionsModeloCarro}
                name="bus_modelo"
                placeholder="Modelo"
                onChange={(e) => setBusModelo(e.value)}
              />
              <Select
                options={optionsCombustivel}
                name="bus_tipoCombustivel"
                placeholder="Tipo de Combustível"
                onChange={(e) => setVehicleCombustivel(e.value)}
              />
              <Select
                options={optionsAno}
                name="bus_ano"
                placeholder="Ano"
                onChange={(e) => setBusAno(e.value)}
              />
              <Select
                options={optionsCilindradas}
                name="bus_cilindradas"
                placeholder="Cilindradas"
                onChange={(e) => setBusCilindradas(e.value)}
              />
              <Select
                options={optionsPotencia}
                name="bus_potencia"
                placeholder="Potencia"
                onChange={(e) => setBusPotencia(e.value)}
              />
              <Select
                options={optionsNPortas}
                name="bus_nPortas"
                placeholder="Nº de Portas"
                onChange={(e) => setBusPortas(e.value)}
              />
              <Select
                options={optionsPortaMalas}
                name="bus_portaMalas"
                placeholder="Capacidade Porta Malas"
                onChange={(e) => setBusPortaMalas(e.value)}
              />
            </div>
            <div className="three-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="bus_cor"
                placeholder="Cor"
                onChange={(e) => setBusCor(e.target.value)}
              />
              <Input
                id="standard-basic"
                name="bus_Quilometragem"
                type="text"
                placeholder="Quilometragem"
                onChange={(e) => setBusQuilometragem(e.target.value)}
              />
              <Input
                id="standard-basic"
                name="bus_placa"
                type="text"
                placeholder="Placa"
                style={{ width: "100%" }}
                onChange={(e) => setBusPlaca(e.target.value)}
              />
            </div>
            <div className="two-inputs">
              <Input
                id="standard-basic"
                name="bus_renavam"
                type="text"
                placeholder="Renavam"
                style={{ width: "100%" }}
                onChange={(e) => setBusRenavam(e.target.value)}
              />
              <Input
                type="text"
                id="standard-basic"
                name="bus_chassi"
                placeholder="Chassi"
                onChange={(e) => setBusChassi(e.target.value)}
              />
            </div>
            <div className="three-inputs">
              <Input
                id="standard-basic"
                name="bus_Assentos"
                type="text"
                placeholder="Nº de Assentos"
                style={{ width: "100%" }}
                onChange={(e) => setBusAssentos(e.target.value)}
              />
              <Input
                type="text"
                id="standard-basic"
                name="bus_status"
                placeholder="Status: Em análise"
                disabled
              />
              <Input
                type="text"
                id="standard-basic"
                name="bus_imageUrl"
                placeholder="ImagemUrl"
                onChange={(e) => setBusImagemUrl(e.target.value)}
              />
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
                  &nbsp;&nbsp;&nbsp; Veículo de cliente parceiro?
                </label>
              </Subtitle>
              <Input
                id="standard-basic"
                type="text"
                name="bus_cpfParceiro"
                placeholder="CPF Parceiro"
                onChange={(e) => setBusCpfParceiro(e.target.value)}
              />
            </div>
            <Subtitle>Dados para locação</Subtitle>
            <div className="two-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="bus_diaria"
                placeholder="Valor da diária"
                onChange={(e) => setBusDiaria(e.target.value)}
              />
              <Select
                options={optionsFilial}
                name="bus_filial"
                placeholder="Filial de origem"
                onChange={(e) => setBusFilial(e.value)}
              />
            </div>
            <br />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleSubmitBus} type="submit">
              CADASTRAR
            </Button>
          </div>
        </Column2>
      </VehicleTypeCard>
    </Section>
  );
};

export default BusRegistration;
