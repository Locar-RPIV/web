import styled from "styled-components";
import SplashImage from "../../../assets/vehicles.jpg";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  header {
    grid-column: span 2;
    padding: 30px;
    text-align: center;
    font-size: 1.4em;
    background-color: #369;
    color: white;
  }

  main {
    flex: 1;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 100px;
    grid-gap: 10px;

    .header {
      display: grid;
      align-items: center;
    }

    .introduction {
      display: grid;
      align-items: center;
      justify-items: center;
      margin-bottom: 1em;
      font-size: 1.3em;
      font-weight: 300;
    }

    .call-to-action {
      display: grid;
      align-items: center;
      justify-items: center;
      margin-bottom: 1em;
      font-size: 1.3em;
      font-weight: 300;
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .app-btn {
      width: 45%;
      max-width: 160px;
      height: 54px;
      color: #fff;
      margin: 20px 10px;
      text-align: left;
      border-radius: 5px;
      text-decoration: none;
      font-family: "Lucida Grande", sans-serif;
      font-size: 10px;
      text-transform: uppercase;
    }
    .app-btn.blu {
      background-color: #101010;
      transition: background-color 0.25s linear;
    }
    .app-btn.blu:hover {
      background-color: #454545;
    }
    .app-btn i {
      width: 20%;
      text-align: center;
      font-size: 28px;
      margin-right: 7px;
    }
    .app-btn .big-txt {
      font-size: 17px;
      text-transform: capitalize;
    }
  }

  aside {
    padding: 20px;
    background-image: url(${SplashImage});
    background-size: cover;
  }

  h1.title {
    font-size: 25px;
    font-weight: 300;
    color: #336699;
  }
`;
