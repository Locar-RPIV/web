import React, { useState } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";

import NavBar from "../../../../components/NavBar";
import Api from "../../../../services/api";
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

const MotorcycleRegistration: React.FC = () => {
  const [marca, setMotoMarca] = useState("");
  const [modelo, setMotoModelo] = useState("");
  const [potencia, setMotoPotencia] = useState("");
  const [status, setMotoStatus] = useState("Em análise");
  const [placa, setMotoPlaca] = useState("");
  const [cor, setMotoCor] = useState("");
  const [ano, setMotoAno] = useState(0);
  const [tipoVeiculo] = useState("Bicicleta");
  const [quilometragem, setMotoQuilometragem] = useState("");
  const [renavan, setMotoRenavam] = useState("");
  const [chassi, setMotoChassi] = useState("");
  const [assentos, setMotoAssentos] = useState("");
  const [valorLocacao, setMotoDiaria] = useState("");
  const [carroParceiro, setCarroParceiro] = useState("");
  const [cpfParceiro, setMotoCpfParceiro] = useState("");
  const [filial, setMotoFilial] = useState(0);
  const [imageUrl, setMotoImagemUrl] = useState("");
  const [cilindradas, setMotoCilindradas] = useState("");
  const [tipoCombustivel, setMotoCombustivel] = useState(0);

  const history = useHistory();

  const optionsMarcaMoto = [
    { value: "Honda", label: "Honda" },
    { value: "Yamaha", label: "Yamaha" },
    { value: "BMW", label: "BMW" },
    { value: "Ford", label: "Ford" },
    { value: "Honda", label: "Honda" },
    { value: "Suzuki", label: "Suzuki" },
  ];

  const optionsFilial = [
    { value: 1, label: "Unidade Alegrete" },
    { value: 3, label: "Unidade Porto Alegre" },
    { value: 2, label: "Unidade São Borja" },
    { value: 4, label: "Unidade Uruguaiana" },
  ];

  const optionsModeloMoto = [
    { value: "Biz 100", label: "Biz 100" },
    { value: "Biz 125", label: "Biz 125" },
    { value: "CG 125", label: "CG 125" },
    { value: "CG 150", label: "CG 150" },
    { value: "YBR 125", label: "YBR 125" },
    { value: "NXR 150", label: "NXR 150" },
    { value: "CB 300", label: "CB 300" },
    { value: "XRE 300", label: "XRE 300" },
    { value: "Fazer 250", label: "Fazer 250" },
    { value: "Crypton", label: "Crypton" },
    { value: "Lead 110", label: "Lead 110" },
    { value: "XTZ 125", label: "XTZ 125" },
    { value: "XTZ 250", label: "XTZ 250" },
    { value: "Intruder 125", label: "Intruder 125" },
    { value: "Burgman 125", label: "Burgman 125" },
    { value: "Lander", label: "Lander" },
  ];

  const optionsPotencia = [
    { value: "6.43 CV", label: "6.43 CV" },
    { value: "9.2 CV", label: "9.2 CV" },
    { value: "77 CV", label: "77 CV" },
    { value: "78 CV", label: "78 CV" },
    { value: "80 CV", label: "80 CV" },
    { value: "82 CV", label: "82 CV" },
    { value: "84 CV", label: "84 CV" },
    { value: "85 CV", label: "85 CV" },
    { value: "88 CV", label: "88 CV" },
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
    { value: 2, label: "Etanol" },
    { value: 4, label: "Gasolina" },
  ];

  const optionsCilindradas = [
    { value: "1.0", label: "1.0" },
    { value: "1.2", label: "1.2" },
    { value: "1.3", label: "1.3" },
    { value: "1.4", label: "1.4" },
    { value: "1.5", label: "1.5" },
    { value: "1.6", label: "1.6" },
    { value: "1.8", label: "1.8" },
    { value: "2.0", label: "2.0" },
    { value: "2.2", label: "2.2" },
    { value: "2.3", label: "2.3" },
    { value: "2.4", label: "2.4" },
    { value: "2.5", label: "2.5" },
    { value: "2.7", label: "2.7" },
    { value: "2.8", label: "2.8" },
    { value: "3.0", label: "3.0" },
    { value: "3.2", label: "3.2" },
    { value: "3.3", label: "3.3" },
    { value: "3.5", label: "3.5" },
    { value: "3.7", label: "3.7" },
    { value: "3.8", label: "3.8" },
    { value: "4.0", label: "4.0" },
  ];

  const handleSubmitMoto = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    try {
      if (
        !modelo ||
        !status ||
        !potencia ||
        !placa ||
        !cor ||
        !ano ||
        !tipoCombustivel ||
        !quilometragem ||
        !renavan ||
        !chassi ||
        !valorLocacao ||
        !cilindradas ||
        !filial ||
        !imageUrl ||
        !tipoVeiculo ||
        !assentos
      ) {
        alert("Preencha todos os campos");
        return;
      } else if (carroParceiro === "on" && cpfParceiro) {
        await Api.post("/automobile", {
          marca,
          modelo,
          status,
          potencia,
          placa,
          cor,
          ano,
          tipoCombustivel,
          quilometragem,
          renavan,
          chassi,
          valorLocacao,
          carroParceiro: true,
          cpfParceiro,
          cilindradas,
          filial,
          imageUrl,
          tipoVeiculo,
          assentos,
        });
        history.push("/FeedbackVehicle");
      } else if (carroParceiro === "" && !cpfParceiro) {
        await Api.post("/automobile", {
          marca,
          modelo,
          status,
          potencia,
          placa,
          cor,
          ano,
          tipoCombustivel,
          quilometragem,
          renavan,
          chassi,
          valorLocacao,
          carroParceiro: false,
          cpfParceiro: 0,
          cilindradas,
          filial,
          imageUrl,
          tipoVeiculo,
          assentos,
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
          <FaMotorcycle className="title-icon" size={"1.3em"} />
          Motocicleta
        </Title>
        <Column1>
          <div>
            <Subtitle>Dados do veículo</Subtitle>
            <div className="three-inputs">
              <Select
                options={optionsMarcaMoto}
                name="moto_marca"
                placeholder="Marca"
                onChange={(e) => setMotoMarca(e!.value)}
              />
              <Select
                options={optionsModeloMoto}
                name="moto_modelo"
                placeholder="Modelo"
                onChange={(e) => setMotoModelo(e!.value)}
              />
              <Select
                options={optionsCombustivel}
                name="moto_tipoCombustivel"
                placeholder="Tipo de Combustível"
                onChange={(e) => setMotoCombustivel(e!.value)}
              />
              <Select
                options={optionsAno}
                name="moto_ano"
                placeholder="Ano"
                onChange={(e) => setMotoAno(e!.value)}
              />
              <Select
                options={optionsCilindradas}
                name="moto_cilindradas"
                placeholder="Cilindradas"
                onChange={(e) => setMotoCilindradas(e!.value)}
              />
              <Select
                options={optionsPotencia}
                name="moto_potencia"
                placeholder="Potencia"
                onChange={(e) => setMotoPotencia(e!.value)}
              />
            </div>
            <div className="three-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="moto_cor"
                placeholder="Cor"
                onChange={(e) => setMotoCor(e.target.value)}
              />
              <Input
                id="standard-basic"
                name="moto_Quilometragem"
                type="text"
                placeholder="Quilometragem"
                onChange={(e) => setMotoQuilometragem(e.target.value)}
              />
              <Input
                id="standard-basic"
                name="moto_placa"
                type="text"
                placeholder="Placa"
                style={{ width: "100%" }}
                onChange={(e) => setMotoPlaca(e.target.value)}
              />
            </div>
            <div className="two-inputs">
              <Input
                id="standard-basic"
                name="moto_renavam"
                type="text"
                placeholder="Renavam"
                style={{ width: "100%" }}
                onChange={(e) => setMotoRenavam(e.target.value)}
              />
              <Input
                type="text"
                id="standard-basic"
                name="moto_chassi"
                placeholder="Chassi"
                onChange={(e) => setMotoChassi(e.target.value)}
              />
            </div>
            <div className="three-inputs">
              <Input
                id="standard-basic"
                name="moto_Assentos"
                type="text"
                placeholder="Nº de Assentos"
                style={{ width: "100%" }}
                onChange={(e) => setMotoAssentos(e.target.value)}
              />
              <Input
                type="text"
                id="standard-basic"
                name="moto_status"
                placeholder="Status"
                onChange={(e) => setMotoStatus("Em análise")}
              />
              <Input
                type="text"
                id="standard-basic"
                name="moto_imageUrl"
                placeholder="ImagemUrl"
                onChange={(e) => setMotoImagemUrl(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="input-file">Selecionar um arquivo</label>
              <input id="input-file" type="file" value="" />
              <span id="file-name"></span>
            </div>
            {/* <div>
              <label className="form-label">Fotos do veículo</label>
              <input type="file" accept="image/*" />
            </div> */}
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
                name="moto_cpfParceiro"
                placeholder="CPF Parceiro"
                onChange={(e) => setMotoCpfParceiro(e.target.value)}
              />
            </div>
            <Subtitle>Dados para locação</Subtitle>
            <div className="two-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="moto_diaria"
                placeholder="Valor da diária"
                onChange={(e) => setMotoDiaria(e.target.value)}
              />
              <Select
                options={optionsFilial}
                name="moto_filial"
                placeholder="Filial de origem"
                onChange={(e) => setMotoFilial(e!.value)}
              />
            </div>
            <br />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleSubmitMoto} type="submit">
              CADASTRAR
            </Button>
          </div>
        </Column2>
      </VehicleTypeCard>
    </Section>
  );
};

export default MotorcycleRegistration;
