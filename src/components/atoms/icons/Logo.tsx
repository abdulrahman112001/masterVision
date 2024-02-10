import React from "react";
import logo from "../../../assets/global/logo.jpg";

function Logo() {
  return (
    <div className="logo-in-top">
      <img alt="Logo" src={logo} style={{ height: "70px", width: "70px" }} />
    </div>
  );
}

export default Logo;
