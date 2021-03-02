import React from "react";
import { StyledNavBar } from "./styles";

import { MdPerson } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";

const NavBar: React.FC = () => {
  return (
    <StyledNavBar>
        <a href="#first">
          <i>
            <IoMdCar />
          </i>
        </a>
        <a href="#second">
          <i>
            <MdPerson />
          </i>
        </a>
        <a href="#third">
          <i>
            <AiFillPieChart />
          </i>
        </a>
    </StyledNavBar>
  );
};

export default NavBar;
