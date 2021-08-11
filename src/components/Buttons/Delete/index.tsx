import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { StyledDeleteButton } from "./styles";

const DeleteButton: React.FC = () => {
  return (
    <StyledDeleteButton>
      <FaTrashAlt size={"2em"} />
    </StyledDeleteButton>
  );
};

export default DeleteButton;
