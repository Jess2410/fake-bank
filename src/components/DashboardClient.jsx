
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { helperToast } from '../helpers/helperToast';
import axios from 'axios';
import { BASE_URL } from "../app.config";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";



  const DashboardClient=()=>{
// const inputs={
//       bookingday:"",
//       bookinghour:""
//     }
const history = useHistory()
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState("");
    const [loading, setLoading] = useState(false)

    const today = new Date()
      const handleChange =(e)=>{
    setHour(e.target.value)
      }


      const handleSubmit = async  (e) => {
        e.preventDefault()
           setLoading(true)
      
          const res = await axios.post(`${BASE_URL}dashboardbooking`,{bookingday:date.toLocaleDateString(),bookinghour:hour})
          console.log(res)

//           // if (emailConfirm === form.email && passwordConfirm === form.password ) {
//           //   setLoading(true)
//           //   try {
//           //     const res = await axios.post(`${BASE_URL}user`, form)
//           //     console.log(res)
//           //     if (res.data && res.data?.status !== 400) {
//           //       setLoading(false)
//           //       helperToast("success", "Compte créé avec succès !")
//           //       history.push("/connexion")
//           //     } else if(res.data && res.data?.status === 400) {
//           //       setLoading(false)
//           //       helperToast("warning",res.data?.error)
//           //     }
//           //   } catch (err) {
//           //     setLoading(false)
//           //     helperToast("error", "Une erreur est survenue !")
//           //   }
//           //   setLoading(false)
//           //   } else {
//           //       helperToast("warning", "l'email ou mot de passe ne correspond pas !")
//           //   }
          
//           // }

//           if (date>(today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear())) {
//             setLoading(true)
// try{
//   const res = await axios.post(`${BASE_URL}booking`, {booking})
//   //     console.log(res)

// }


//           } else {
            
//           }
//           if (res.status === 200) {
//             setLoading(false)
//             helperToast("success", "Rendez-vous confirmé !")
//             history.push("/dashboardclient")
//           }
//         } catch (err) {
//           setLoading(false)
//           helperToast("error", "Une erreur est survenue !")
//         }
//         setLoading(false)
      
      }
    return(
  
        <div className="calendar-content">
          <h2>Prenez <span>rdv</span> avec un <span>conseiller</span></h2>
          <h2>Disponible du lundi au samedi</h2>
          <br />
          <form id="booking"   >
            <details className="calendar"> 
            <summary>Prendre RDV</summary>
            <Calendar onChange={setDate} value={date} name="bookingday"/>
                <br />
            <label for="hour-select">Choisissez un créneau :</label>
                <br />  
            <select onChange={handleChange} value={hour} name="bookinghour">
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

            <p className="rdv">Vous avez choisi le <span>{date.toLocaleDateString()}</span> à <span>{hour}h</span>.</p>
            </details>
            <button className="connect " type="submit" onClick={e => handleSubmit(e)} >{loading ?"chargement...":"Valider"}</button>
      </form>

      </div>
    )
}

export default DashboardClient