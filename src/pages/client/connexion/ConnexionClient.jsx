import React from "react";

// IMPORT COMPONENTS
import FormConnexion from "../../../components/FormConnexion"
import Navbar from "../../../components/Navbar";

// IMPORT STYLES
import "../connexion/connexion.css"

const ConnexionCLient = () => {
  return (
    <div>
      <Navbar />
      <FormConnexion/>
    </div>
  );
};

export default ConnexionCLient;
