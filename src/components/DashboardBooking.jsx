import axios from 'axios'
import React, {useState, useEffect} from 'react' 


  const DashboardBooking=()=>{

    const [data, setData] = useState([]) 



       useEffect(() => { 


      axios
      .get("http://127.0.0.1:8000/api/dashboardbooking")
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
              <tbody>
              {data.map((rdv,index)=> <tr key={index}>
                                      <td>{rdv.bookingday}</td>
                                      <td>{rdv.bookinghour}</td>
                                      </tr>)}
           </tbody>
          </table>
    


      </div>
    )
}

export default DashboardBooking