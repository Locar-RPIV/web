import React from "react";
import { FaEdit } from "react-icons/fa";
import { StyledEditButton } from "./styles";

const EditButton: React.FC = () => {
  return (
    <StyledEditButton>
      <FaEdit size={"2em"} />
    </StyledEditButton>
  );
};

export default EditButton;
