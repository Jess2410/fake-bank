import React from "react";
import logo from "../assets/svg/logo.svg"

const Navbar = () => {

  const handleClick=(e)=>{
    e.preventDefault()
    window.location.href = "/connexion"
  }

  return (

    <header className="header">
      <div className="logo-container">
     <img className="logo" src={logo} alt="logo"/>
      <h1>FakeBank</h1>
      </div>
      <nav className="navbar">
        <a  href="/inscription">
          S'inscrire
        </a>
        <button className="connectNav" onClick={handleClick}>
          Se connecter
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
