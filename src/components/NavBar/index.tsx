import React from "react";
import { StyledNavBar } from "./styles";

import { MdPerson} from "react-icons/md";
import { IoMdCar} from "react-icons/io";
import { IoTicket} from "react-icons/io5";
import { AiFillPieChart } from "react-icons/ai";



const NavBar: React.FC = () => {
  return (
    <StyledNavBar>
      <div className="options">
        <a href="/Dashboard#first">
          <i>
            <IoMdCar />
          </i>
        </a>
        <a href="/Dashboard#second">
          <i>
            <MdPerson />
          </i>
        </a>
        <a href="/Dashboard#third">
          <i>
            <IoTicket />
          </i>
        </a>
        <a href="/Dashboard#fourth">
          <i>
            <AiFillPieChart />
          </i>
        </a>
        </div>
    </StyledNavBar>
  );
};

export default NavBar;
