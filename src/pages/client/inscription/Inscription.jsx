import React from "react";
import FormInscription from "../../../components/FormInscription";

// IMPORT ASSETS
import Navbar from "../../../components/Navbar";


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
