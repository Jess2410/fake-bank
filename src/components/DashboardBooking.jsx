import axios from 'axios'
import React, {useState, useEffect} from 'react' 
import { useHistory } from 'react-router-dom'



  const DashboardBooking=()=>{


    const history = useHistory()

    const handleClick=(e)=>{
      history.push("/dashboard")
    }
    const [data, setData] = useState([]) 



       useEffect(() => { 


      axios
      .get("http://127.0.0.1:8000/api/dashboard")
      .then(response => setData(response.data));
   
  }, []);
   console.log(data)
      
    return(
  
        <div className="calendar-content">
          <h2>Mes RDV</h2>
     
         {/* {data.map((name,index)=> <li key={index}>{name}</li>)}  */}
          <table className='rdv'>
    
              <th>Date</th>
              <th>Heure</th>
              <th>Agent n°</th>
              <tbody>
              
              {data.map((rdv,index)=> <tr key={index}>
                                      <td>{rdv.bookingday}</td>
                                      <td>{rdv.bookinghour}</td>
                                      <td>{rdv.agent_id}</td>
                                      </tr>)}
           </tbody>
          </table>

          <button className="btn-border" onClick={e=>handleClick(e)}>Retour</button>
    


      </div>
    )
}

export default DashboardBooking