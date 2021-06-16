import React from "react";
import { Container } from "./styles";

import { FaGooglePlay, FaApple } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <main>
        <div className="header">
          <h1 className="title">LOCAR</h1>
        </div>
        <div className="introduction">
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="call-to-action">Baixe agora</div>
        <div className="flex social-btns">
          <a className="app-btn blu flex vert" href="http:apple.com">
            <i><FaApple /></i>
            <p>
              Available on the <br /> <span className="big-txt">App Store</span>
            </p>
          </a>

          <a className="app-btn blu flex vert" href="http:google.com">
            <i><FaGooglePlay /></i>
            <p>
              Get it on <br /> <span className="big-txt">Google Play</span>
            </p>
          </a>
        </div>
      </main>
      <aside></aside>
    </Container>
  );
};

export default LandingPage;
