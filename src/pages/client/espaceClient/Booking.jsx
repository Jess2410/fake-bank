import React from "react";

// IMPORT COMPONENTS
import DashboardBooking from "../../../components/DashboardBooking";
import NavbarConnected from "../../../components/NavbarConnected";

// IMPORT STYLES
import "./dashboard.css"
import 'react-calendar/dist/Calendar.css';

const Booking = () => {

  return (
    <div>
      <NavbarConnected />
      <DashboardBooking/>
    </div>
  );
};

export default Booking;
