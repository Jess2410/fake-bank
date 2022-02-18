import React from "react";
import "./App.css";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//IMPORT DES PAGES
import Accueil from "./pages/client/accueil/Accueil";
import Inscription from "./pages/client/inscription/Inscription";
import InscriptionAdmin from "./pages/admin/inscription/InscriptionAdmin";
import ConnexionClient from "./pages/client/connexion/ConnexionClient";
import Dashboard from "./pages/client/espaceClient/Dashboard"
import Booking from "./pages/client/espaceClient/Booking";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} /> 
        {/* ROUTES USER */} 
        <Route exact path="/register" component={Inscription} /> 
        <Route exact path="/login" component={ConnexionClient} />
        <Route exact path="/dashboard" component={Dashboard} />   
        <Route exact path="/dashboardbooking" component={Booking} />  
         {/* ROUTES ADMIN */} 
        <Route exact path="/inscriptionadmin" component={InscriptionAdmin} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;

