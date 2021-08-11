import styled from "styled-components";

export const StyledCard = styled.div`
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

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Button = styled.button`
  width: 160px;
  height: 48px;
  background: #eb8712;
  border-radius: 10px;
  border: 0px;
  font-size: 18px;
  color: #fff;
  font-weight: lighter;

  :hover {
    cursor: pointer;
  }
`;



