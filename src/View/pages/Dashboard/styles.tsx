import styled from "styled-components";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export const Container = styled.div`
  nav a {
    font-size: 40px;
    color: #fff;
    text-decoration: none;
    padding: 20px;
    text-align: center;
  }

  nav {
    position: fixed;
    left: 0;
    z-index: 50;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100vh;
    background: #369;
  }

  section {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 0;
    opacity: 0;
    transition: all ease-in 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section h1 {
    color: #fff;
    font-size: 50px;
    text-transform: uppercase;
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
  width: 80%;
  height: 70%;
  padding: 40px;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px 40px;
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
`;

export const Title = styled.span`
  grid-column: span 2;
  color: #369;
  font-size: 25px;
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
  margin-right: 10px;
  margin-top: 20px;
  height: 56px;
  font-size: 18px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  color: #aaaaaa;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  color: #eb8712;
  height: 20px;
  position: relative;

  input[type="checkbox"]::before {
    content: " ";
    width: inherit;
    height: inherit;
    position: absolute;
    background-color: #fff;
    border: 1px solid #eb8712;
  }
  input[type="checkbox"]:checked::after {
    content: " ";
    width: 0.2rem;
    height: 0.5rem;
    margin-left: 0.3rem;
    border-color: #eb8712;
    border-style: solid;
    border-width: 0 3px 3px 0;
    position: absolute;
    transform: rotate(45deg);
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
