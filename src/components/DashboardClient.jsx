
import { useState } from 'react';
import Calendar from 'react-calendar';
// import { helperToast } from '../helpers/helperToast';
// import axios from 'axios';
// import { BASE_URL } from "../app.config";
// import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";

  const DashboardClient=()=>{


    // const history = useHistory()
    // const [form, setForm] = useState(inputs);
    const [value, onChange] = useState(new Date());
    const [hour, setHour] = useState("");

    // const inputs = {
    //     bookingday: "",
    //     bookinghour:""
    //       }

    const handleChange =(e)=>{
    setHour(e.target.value)
    }
    // const handleSubmit = async  (e) => {
    //     e.preventDefault()
    //     if (status==="success" ) {
    //         toast.promise(axios.post(`${BASE_URL}booking`, form).then(res => {
    //             history.push("/login")
    //         }), {
    //             pending: "Veuillez patienter !",
    //             success: "Votre RDV a bien été pris en compte !",
    //             error: "Une erreur s'est produite 🤯",
    //           });
    //     } else {
    //         helperToast("warning", "l'email ou mot de passe ne correspond pas !")
    //     }
        
    // }

    return(
  
        <div className="calendar-content">
          <h2>Prenez <span>rdv</span> avec un <span>conseiller</span></h2>
          <h2>Disponible du lundi au samedi</h2>
          <br />
          <form id="booking" >
            <details className="calendar"> 
            <summary>Prendre RDV</summary>
            <Calendar onChange={onChange} value={value} name="bookingday"/>
                <br />
            <label for="hour-select">Choisissez un créneau :</label>
                <br />  
            <select id="hour-select" onChange={e => handleChange(e)} value={hour} name="bookinghour">
                <option value="" key={"1"}>-- Heure de RDV --</option>
                <option value="8:00" key={"2"}>08:00</option>
                <option value="9:00" key={"3"}>09:00</option>
                <option value="10:00" key={"4"}>10:00</option>
                <option value="11:00" key={"5"}>11:00</option>
                <option value="14:00" key={"6"}>14:00</option>
                <option value="15:00" key={"7"}>15:00</option>
                <option value="16:00" key={"8"}>16:00</option>
                <option value="17:00" key={"9"}>17:00</option>
            </select>

            <p className="rdv">Vous avez choisi le <span>{value.toLocaleDateString()}</span> à <span>{hour}h</span>.</p>
            </details>
            {/* <button type="submit" onSubmit={(e)=>handleSubmit(e)}>Valider</button> */}
      </form>

      </div>
    )
}

export default DashboardClient