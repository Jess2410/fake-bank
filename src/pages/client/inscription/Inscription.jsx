import React from "react";

// IMPORT COMPONENTS
import Navbar from "../../../components/Navbar";
import FormInscription from "../../../components/FormInscription";

// IMPORT STYLES
import "./inscription.css"
import "../accueil/general.css"

const Inscription = () => {


  return (
    <div>
      <Navbar />
      <FormInscription/>
    </div>
  );
};

export default Inscription;
