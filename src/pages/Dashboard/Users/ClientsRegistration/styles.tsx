import styled from "styled-components";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export const Container = styled.div`
  section {
    position: absolute;
    top: 0;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
  }

  section h1 {
    color: #fff;
    font-size: 50px;
    opacity: 0;
  }

  /* Styles applied on trigger */
  section:target {
    opacity: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  section:target h1 {
    opacity: 0;
    animation: 2s fadeIn forwards 0.5s;
  }

  #first {
    background: var(--secondary-color);
  }
  #second {
    background: var(--secondary-color);
  }

  #third {
    background: var(--secondary-color);
  }

  #fourth {
    background: var(--secondary-color);
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  width: 70%;
  height: 70%;
  padding: 40px;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px 72px;
  border-radius: 15px;
  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;

  @media (max-width: 768px) {
    //padding: 10px;
  }

  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;

  .one-input {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
    margin: 24px 0px;
  }

  .two-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin: 24px 0px;
  }

  .three-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    margin: 24px 0px;
  }
`;

export const VehicleTypeCard = styled.div`
  background-color: #fff;
  width: 70%;
  height: 70%;
  padding: 40px;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;
  grid-gap: 0px 72px;
  border-radius: 15px;
  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;

  @media (max-width: 768px) {
    //padding: 10px;
  }

  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;

  .vehicle-type {
    color: #444;
    font-weight: lighter;
  }

  .one-input {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
    margin: 24px 0px;
  }

  .two-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin: 24px 0px;
  }

  .three-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    margin: 24px 0px;
  }

  .band {
    width: 80%;
    margin: 0 auto;

    display: grid;

    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
  }

  @media only screen and (min-width: 500px) {
    .band {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (min-width: 850px) {
    .band {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .card {
    background: var(--white-color);
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-height: 200px;

    border-radius: 0.5vw;

    position: relative;
    top: 0;
    transition: all 0.1s ease-in;
  }

  .card:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  .card article {
    padding: 20px;
  }

  .card .thumb {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100px;
    color: #369;
  }

  .card h1 {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 1vh;
    color: #369;
    text-align: center;
  }

  .card p {
    line-height: 1.4;
    font-weight: 300;
  }

  .card article {
    padding: 20px;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card p {
    flex: 1;
    line-height: 1.4;
  }
`;

export const Title = styled.span`
  grid-column: span 2;
  color: #369;
  font-size: 24px;
  font-weight: lighter;

  .title-icon {
    display: inline;
    vertical-align: bottom;
    margin-right: 20px;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  margin-top: 20px;
  height: 64px;
  font-size: 18px;
  font-weight: lighter;
  padding-left: 16px;
  border-radius: 5px;
  border: 1px dashed #f5f5f5;
  background-color: #f5f5f5;
  color: #aaaaaa;
  width: 100%;

  :hover {
    border-bottom: 1px solid #369;
    cursor: pointer;
    transition: linear 1s;
  }
`;

export const Subtitle = styled.div`
  font-size: 20px;
  color: #eb8712;
  height: 24px;
  position: relative;
  display: inline;
  vertical-align: middle;

  input[type="checkbox"]::before {
    content: " ";
    width: 2em;
    height: 2em;
    position: absolute;
    background-color: #fff;
    border: 1px solid #eb8712;
    top: 0px;
  }

  input[type="checkbox"]:hover {
    cursor: pointer;
  }

  input[type="checkbox"]:checked::after {
    content: " ";
    width: 1.5em;
    height: 1.5em;
    background-color: #eb8712;
    border: none;
    position: absolute;
    top: 0.35em;
    left: 0.35em;
  }
`;

export const Button = styled.button`
  width: 190px;
  height: 63px;
  background: #eb8712;
  border-radius: 10px;
  border: 0px;
  font-size: 18px;
  color: #fff;
`;


export const FeedbackCard = styled.div`
  background-color: #fff;
  width: 70%;
  height: 70%;
  padding: 40px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px 72px;
  border-radius: 15px;
  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;

  @media (max-width: 768px) {
    //padding: 10px;
  }

  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;


  .column1 {
    width: 150%;
    height: 50%;
    padding: 180px;
    display: grid;
    align-items: center;
  }

  .column2 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
