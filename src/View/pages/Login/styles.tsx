import styled from "styled-components";

import DashboardIllustration from "../../../assets/vehicle.svg";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export const Container = styled.body`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 1fr;
  }
  @media (max-width: 1280px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
  }
`;

export const MainImage = styled.main`
  flex: 1;
  padding: 20px;
  background: url(${DashboardIllustration}) center var(--secondary-color)
    no-repeat;
  background-size: contain;
  @media (max-width: 768px) and (orientation: landscape) {
    min-height: 100%;
  }
`;

export const LoginContainer = styled.aside`
  padding: 20px;
  background-color: var(--white-color);
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;
  > .title {
    text-align: center;
    font-size: 25px;
    font-weight: 300;
    color: #336699;
  }
  > .subtitle {
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  > button {
    position: relative;
    margin-top: 54px;
    padding: 13px 18px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.87;
    }
  }
  > .lost-password {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  margin-top: 20px !important;
  height: 48px;
  font-weight: lighter;
  font-size: 1.2em;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
