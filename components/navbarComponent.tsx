import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Menu from "./democomponent";

function NavbarComponent() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Image src={Logo} alt="logo" width={185} height={80} />
      </div>
      <div className="navbar-links-container">
        <h6>
          Products <span className="chevron bottom"></span>
        </h6>
        <h6>
          <Menu />
        </h6>
        <h6>Resell</h6>
        <h6>
          Resources <span className="chevron bottom"></span>
        </h6>
      </div>
      <div>
        <button className="navbar-trial-button">Start my trial</button>
      </div>
    </div>
  );
}

export default NavbarComponent;
