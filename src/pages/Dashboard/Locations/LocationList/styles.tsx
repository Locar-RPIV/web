import styled from "styled-components";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

export const ListUserCard = styled.div`
  background-color: #fff;
  width: 70%;
  height: 70%;
  padding: 40px;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;
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

  .table-content {
    width: 100%;
    overflow-y: auto;
    height: 100%;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    color: #777;
    width: 100%;
  }

  th {
    color: #eb8712;
    text-align: left;
    padding: 20px;
    padding-bottom: 40px;
    font-size: 20px;
    font-weight: lighter;
  }

  td {
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding: 20px;
    font-size: 20px;
    font-weight: lighter;
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
