import React from "react";
import logo from "../assets/svg/logo.svg"

const NavbarConnected = () => {


  return (

    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo"/>
        <h1>FakeBank</h1>
      </div>
      <nav className="navbar">
        <a  href="/">
          Déconnexion
        </a>
        <button className="connectNav">
        <a  style={{color:'white'}} href="/dashboardbooking">
          Mes rendez-vous</a>
        </button>
      </nav>
    </header>
  );
};

export default NavbarConnected;
