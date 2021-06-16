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
