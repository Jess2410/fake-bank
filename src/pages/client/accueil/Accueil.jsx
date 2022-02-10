import React from "react";
import Navbar from "../../../components/Navbar";
import calendarSVG from "../../../assets/svg/calendarSVG.svg";

// IMPORT ASSETS




// IMPORT STYLES
import "./accueil.css"
import "../../../../src/pages/client/accueil/general.css"


const Accueil = () => {
const handleClick=(e)=>{
  e.preventDefault()
  window.location.href = "connexion"
}

  return (
    <div>
      <Navbar />
        <div className="accueil-content">
      <div className="accueil--article">
        <h1>N'attendez plus !</h1>
        <h2>Prenez <span>rdv</span> en un <span>clic</span></h2>
        <h2>avec l'un de nos agents</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio consectetur fugiat, sequi voluptatum non! Vero consequuntur eaque facere nobis exercitationem ipsum eos ducimus alias facilis labore, esse culpa. Laudantium!</p>
        <p>Tenetur distinctio consectetur fugiat, sequi voluptatum non! Vero consequuntur eaque.</p>
        <br />
        <div className="button-rdv">
          <button className="connect" onClick={handleClick}> 
          Prendre RDV</button>
        </div>
    </div>
<img className="calendar" src={calendarSVG} alt="telephone"/>
    </div>
    </div>
  );
};

export default Accueil;
