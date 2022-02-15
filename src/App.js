import React from "react";
import "./App.css";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from "./pages/client/accueil/Accueil";
import Inscription from "./pages/client/inscription/Inscription";
import InscriptionAdmin from "./pages/admin/inscription/InscriptionAdmin";
import ConnexionClient from "./pages/client/connexion/ConnexionClient";
import ConnexionAdmin from "./pages/admin/connexion/ConnexionAdmin";
import Dashboard from "./pages/client/espaceClient/Dashboard"
import Booking from "./pages/client/espaceClient/Booking";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} /> 
        <Route exact path="/inscription" component={Inscription} /> 
        <Route exact path="/connexion" component={ConnexionClient} />
        <Route exact path="/connexionadmin" component={ConnexionAdmin} />
        <Route exact path="/dashboardclient" component={Dashboard} />   
        <Route exact path="/dashboardbooking" component={Booking} />   
        <Route exact path="/inscriptionadmin" component={InscriptionAdmin} />

      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;

