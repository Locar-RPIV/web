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

import { IoMdCar } from "react-icons/io";

import { useHistory } from "react-router-dom";

import Api from "../../services/api";

const VehicleRegistration: React.FC = () => {
  const [marca, setVehicleMarca] = useState("");
  const [modelo, setVehicleModelo] = useState("");
  const [potencia, setVehiclePotencia] = useState("");
  const [placa, setVehiclePlaca] = useState("");
  const [cor, setVehicleCor] = useState("");
  const [ano, setVehicleAno] = useState("");
  const [tipoCombustivel, setVehicleTipo] = useState("");
  const [numeroPortas, setVehiclePortas] = useState("");
  const [quilometragem, setVehicleKilometragem] = useState("");
  const [renavan, setVehicleRenavam] = useState("");
  const [chassi, setVehicleChassi] = useState("");
  const [valorLocacao, setVehicleDiaria] = useState("");
  const [carroParceiro, setCarroParceiro] = useState("");
  const [cpfParceiro, setVehicleCpfParceiro] = useState("");
  const [filial, setVehicleFilial] = useState("");
  const [imageUrl, setVehicleImagemUrl] = useState("");

  const history = useHistory();

  const optionsMarcaCarro = [
    { value: "BMW", label: "BMW" },
    { value: "Chevrolet", label: "Chevrolet" },
    { value: "Fiat", label: "Fiat" },
    { value: "Ford", label: "Ford" },
    { value: "Honda", label: "Honda" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Kia", label: "Kia" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "Mitsubishi", label: "Mitsubishi" },
    { value: "Nissan", label: "Nissan" },
    { value: "Toyota", label: "Toyota" },
    { value: "Vokswagen", label: "Vokswagen" },
    { value: "Jeep", label: "Jeep" },
  ];

  const optionsNPortas = [
    { value: "2", label: "2" },
    { value: "4", label: "4" },
  ];

  const optionsTipo = [
    { value: "Carro", label: "Carro" },
    { value: "Moto", label: "Moto" },
    { value: "Bicicleta", label: "Bicicleta" },
    { value: "Ônibus", label: "Ônibus" },
  ];

  const optionsFilial = [
    { value: "Unidade Alegrete", label: "Unidade Alegrete" },
    { value: "Unidade Porto Alegre", label: "Unidade Porto Alegre" },
    { value: "Unidade São Borja", label: "Unidade São Borja" },
    { value: "Unidade Uruguaiana", label: "Unidade Uruguaiana" },
  ];

  const optionsModeloCarro = [
    { value: "Onix", label: "Onix" }, //Chovrolet
    { value: "HB20", label: "HB20" }, //Hyundai
    { value: "Onix Plus", label: "Onix Plus" }, //Chovrolet
    { value: "Strada", label: "Strada" }, //Fiat
    { value: "Gol", label: "Gol" }, //Vokswagen
    { value: "Ka", label: "Ka" }, //Ford
    { value: "Argo", label: "Argo" }, //Fiat
    { value: "T-Cross", label: "T-Cross" }, //Vokswagen
    { value: "Renegade", label: "Renagade" }, //Jeep
    { value: "Toro", label: "Toro" }, //Toro
    { value: "GLA", label: "GLA" }, //Mercedes-Benz
    { value: "X1", label: "X1" }, //BMW
    { value: "SW4", label: "SW4" }, //Toyota
    { value: "Classe C", label: "Classe C" }, //Mercedes-Benz
    { value: "Série 3", label: "Série 3" }, //BMW
    { value: "Sportage", label: "Sportage" }, //Kia
    { value: "Cerato", label: "Cerato" }, //Kia
    { value: "Outlander", label: "Outlander" }, //Mitsubishi
    { value: "ASX", label: "ASX" }, //Mitsubishi
    { value: "Pajero Sport", label: "Pajero Sport" }, //Mitsubishi
    { value: "Leaf", label: "Leaf" }, //Nissan / Elétrico
    { value: "March", label: "March" }, //Nissan
    { value: "Versa", label: "Versa" }, //Nissan
    { value: "Civic", label: "Civic" }, // Honda
    { value: "Fit", label: "Fit" }, // Honda
    { value: "City", label: "City" }, // Honda
  ];

  const optionsPotencia = [
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

  // // eslint-disable-next-line
  // const optionsCilindradas = [ 
  //   { value: "72 CV", label: "72 CV" },
  //   { value: "75 CV", label: "75 CV" },
  //   { value: "77 CV", label: "77 CV" },
  //   { value: "78 CV", label: "78 CV" },
  //   { value: "80 CV", label: "80 CV" },
  //   { value: "82 CV", label: "82 CV" },
  //   { value: "84 CV", label: "84 CV" },
  //   { value: "85 CV", label: "85 CV" },
  //   { value: "88 CV", label: "88 CV" },
  //   { value: "101 CV", label: "101 CV" },
  //   { value: "104 CV", label: "104 CV" },
  //   { value: "109 CV", label: "109 CV" },
  //   { value: "110 CV", label: "110 CV" },
  //   { value: "111 CV", label: "111 CV" },
  //   { value: "114 CV", label: "114 CV" },
  //   { value: "115 CV", label: "115 CV" },
  //   { value: "116 CV", label: "116 CV" },
  //   { value: "120 CV", label: "120 CV" },
  //   { value: "123 CV", label: "123 CV" },
  //   { value: "128 CV", label: "128 CV" },
  //   { value: "130 CV", label: "130 CV" },
  //   { value: "135 CV", label: "135 CV" },
  //   { value: "136 CV", label: "136 CV" },
  //   { value: "139 CV", label: "139 CV" },
  //   { value: "149 CV", label: "149 CV" },
  //   { value: "150 CV", label: "150 CV" },
  //   { value: "155 CV", label: "155 CV" },
  //   { value: "156 CV", label: "156 CV" },
  //   { value: "157 CV", label: "157 CV" },
  //   { value: "160 CV", label: "160 CV" },
  //   { value: "163 CV", label: "163 CV" },
  //   { value: "165 CV", label: "165 CV" },
  //   { value: "167 CV", label: "167 CV" },
  //   { value: "170 CV", label: "170 CV" },
  //   { value: "171 CV", label: "171 CV" },
  //   { value: "184 CV", label: "184 CV" },
  //   { value: "190 CV", label: "190 CV" },
  //   { value: "192 CV", label: "192 CV" },
  //   { value: "204 CV", label: "204 CV" },
  //   { value: "211 CV", label: "211 CV" },
  //   { value: "231 CV", label: "231 CV" },
  //   { value: "240 CV", label: "240 CV" },
  //   { value: "292 CV", label: "292 CV" },
  //   { value: "387 CV", label: "387 CV" },
  // ];

  const optionsAno = [
    { value: "1990", label: "1990" },
    { value: "1991", label: "1991" },
    { value: "1992", label: "1992" },
    { value: "1993", label: "1993" },
    { value: "1994", label: "1994" },
    { value: "1995", label: "1995" },
    { value: "1996", label: "1996" },
    { value: "1997", label: "1997" },
    { value: "1998", label: "1998" },
    { value: "1999", label: "1999" },
    { value: "2000", label: "2000" },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2003", label: "2003" },
    { value: "2004", label: "2004" },
    { value: "2005", label: "2005" },
    { value: "2006", label: "2006" },
    { value: "2007", label: "2007" },
    { value: "2008", label: "2008" },
    { value: "2009", label: "2009" },
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
  ];

  //   const optionsCor = [
  //     { value: "Azul", label: "Azul"},
  //     { value: "Branco", label: "Branco"},
  //     { value: "Verde", label: "Verde"},
  //     { value: "Vermelho", label: "Vermelho"},
  //     { value: "Prata", label: "Prata"},
  //     { value: "Cinza", label: "Cinza"},
  //     { value: "Rosa", label: "Rosa"},
  //     { value: "Dourado", label: "Dourado"},
  //     { value: "Laranja", label: "Laranja"},
  //     { value: "Amarelo", label: "Amarelo"},
  //     { value: "Roxo", label: "Roxo"},
  //     { value: "Burro quando foge", label: "Burro quando foge"},
  // ];

  const optionsCombustivel = [
    { value: "Etanol", label: "Etanol" },
    { value: "Gasolina", label: "Gasolina" },
    { value: "GNV", label: "GNV" },
    { value: "Diesel", label: "Diesel" },
    { value: "Flex", label: "Flex" },
    { value: "Híbrido/ Elétrico", label: "Híbrido/ Elétrico" },
  ];

  const handleSubmitVehicle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(marca);
    console.log(modelo);
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

    try {
      if (
        !modelo ||
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
        !filial ||
        !imageUrl
      ) {
        alert("Preencha todos os campos");
        return;
      } else if (carroParceiro === "on" && cpfParceiro) {
        const response = await Api.post("/automobile", {
          marca,
          modelo,
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
          filial,
          imageUrl,
        });
        history.push("/FeedbackVehicle");

        console.log(response);
      } else if (carroParceiro === "" && !cpfParceiro) {
        const response = await Api.post("/automobile", {
          marca,
          modelo,
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
          filial,
          imageUrl,
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
          <IoMdCar className="title-icon" size={"1.3em"} />
          Veículos
        </Title>
        <Column1>
          <div>
            <Subtitle>Dados do veículo</Subtitle>
            <div className="two-inputs">
              <Select
                options={optionsMarcaCarro}
                name="vehicle_marca"
                placeholder="Marca"
                onChange={(e) => setVehicleMarca(e.value)}
              />
              <Select
                options={optionsModeloCarro}
                name="vehicle_modelo"
                placeholder="Modelo"
                onChange={(e) => setVehicleModelo(e.value)} 
              />
              <Select
                options={optionsCombustivel}
                name="vehicle_tipoCombustivel"
                placeholder="Tipo de Combustível"
                onChange={(e) => setVehicleTipo(e.value)}
              />
              <Select
                options={optionsAno}
                name="vehicle_ano"
                placeholder="Ano"
                onChange={(e) => setVehicleAno(e.value)}
              />
            </div>
            <div className="three-inputs">
              <Select
                options={optionsPotencia}
                name="vehicle_potencia"
                placeholder="Potencia"
                onChange={(e) => setVehiclePotencia(e.value)}
              />
              <Select
                options={optionsTipo}
                name="vehicle_tipo"
                placeholder="Tipo do Veículo"
                onChange={(e) => setVehicleTipo(e.value)}
              />
              <Select
                options={optionsNPortas}
                name="vehicle_nPortas"
                placeholder="Nº de Portas"
                onChange={(e) => setVehiclePortas(e.value)}
              />
            </div>
            <div className="three-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="vehicle_cor"
                placeholder="Cor"
                onChange={(e) => setVehicleCor(e.target.value)}
              />
              <Input
                id="standard-basic"
                name="vehicle_kilometragem"
                type="text"
                placeholder="Quilometragem"
                onChange={(e) => setVehicleKilometragem(e.target.value)}
              />
              <Input
                id="standard-basic"
                name="vehicle_placa"
                type="text"
                placeholder="Placa"
                style={{ width: "100%" }}
                onChange={(e) => setVehiclePlaca(e.target.value)}
              />
            </div>
            <div className="two-inputs">
              <Input
                id="standard-basic"
                name="vehicle_renavam"
                type="text"
                placeholder="Renavam"
                style={{ width: "100%" }}
                onChange={(e) => setVehicleRenavam(e.target.value)}
              />
              <Input
                type="text"
                id="standard-basic"
                name="vehicle_chassi"
                placeholder="Chassi"
                onChange={(e) => setVehicleChassi(e.target.value)}
              />
            </div>
            <div className="two-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="vehicle_imageUrl"
                placeholder="ImagemUrl"
                onChange={(e) => setVehicleImagemUrl(e.target.value)}
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
                name="vehicle_cpfParceiro"
                placeholder="CPF Parceiro"
                onChange={(e) => setVehicleCpfParceiro(e.target.value)}
              />
            </div>
            <Subtitle>Dados para locação</Subtitle>
            <div className="two-inputs">
              <Input
                type="text"
                id="standard-basic"
                name="vehicle_diaria"
                placeholder="Valor da diária"
                onChange={(e) => setVehicleDiaria(e.target.value)}
              />
              <Select
                options={optionsFilial}
                name="vehicle_filial"
                placeholder="Filial de origem"
                onChange={(e) => setVehicleFilial(e.value)}
              />
            </div>
            <br />
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleSubmitVehicle} type="submit">
              CADASTRAR
            </Button>
          </div>
        </Column2>
      </VehicleTypeCard>
    </Section>
  );
};

export default VehicleRegistration;
