import styled from "styled-components";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export const StyledNavBar = styled.nav`
  position: fixed;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
  background: #369;
  width: 100px;

  a {
    font-size: 40px;
    color: #fff;
    text-decoration: none;
    padding: 20px;
    text-align: center;
  }
`;
