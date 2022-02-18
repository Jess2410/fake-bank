import React from "react";

//IMPORT COMPONENTS
import DashboardClient from "../../../components/DashboardClient";
import NavbarConnected from "../../../components/NavbarConnected";

// IMPORT STYLES
import "./dashboard.css"
import 'react-calendar/dist/Calendar.css';

const EspaceClient = () => {

  return (
    <div>
      <NavbarConnected />
      <DashboardClient/>
    </div>
  );
};

export default EspaceClient;
