import React from "react";
import logo from "../assets/svg/logo.svg"

const NavbarConnected = () => {


  return (

    <header className="header">
      <div className="logo-container">
      <img className="logo" src={logo} alt="logo" />
      <h1>FakeBank</h1>
      </div>
    </header>
  );
};

export default NavbarConnected;
