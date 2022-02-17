import React, { useState } from "react"
import { helperToast } from '../helpers/helperToast';
import axios from 'axios';
import { BASE_URL } from "../app.config";
import { useHistory } from "react-router-dom";

const FormConnexion=()=>{

    const inputs = {
          email: "",
          password: "",
          }
    const history = useHistory()
    const [form, setForm] = useState(inputs);
    const [loading, setLoading] = useState(false)

    const handleClickAccueil=(e)=>{
        e.preventDefault()
        history.push("/") 
        
      }

      const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

      const handleSubmit= async (e)=>{
        e.preventDefault()
            setLoading(true)
            try {
              const res = await axios.post(`${BASE_URL}login`, form)
              console.log(res)
              console.log(res.data.access_token)
              if (res.data && res.data?.status !== 400) {
                setLoading(false)    
                localStorage.setItem("token", res.data.access_token)
                helperToast("success", "Vous êtes connecté(e) !")
                history.push("/dashboard") 
            
              } else if(res.data && res.data?.status === 400) {
                setLoading(false)
                helperToast("warning",res.data?.error)
              }
            } catch (err) {
              setLoading(false)
              helperToast("error", "Une erreur est survenue !")
            }
            setLoading(false)
    
    
        
      }

    return(
        <form className="form--connexion">
            <fieldset>
                <legend ><h2>Connexion</h2></legend>
                <div className="input-style">
                        <div className="input-style">
                            <label>Email</label>
                            <input type="text" id="mail" name="email" placeholder="exemple@mail.com" onChange={e => handleChange(e)}/>
                        </div>
                </div>
                <div className="input-style">
                        <div className="input-style">
                            <label>Mot de passe</label>
                            <input type="password" id="password" name="password" placeholder="********" onChange={e => handleChange(e)}/>  
                        </div> 
                </div>  
                <div></div>   <div className="row">
                <button className="btn-border" type="button" onClick={handleClickAccueil}>Retour</button>
                <button className="connect " type="submit" onClick={e => handleSubmit(e)} >{loading ?"chargement...":"Connexion"}</button>
                </div>
                <p className="text-promotion"><b>Vous n'avez pas de compte ? Inscrivez-vous dès maintenant pour organiser vos rendez-vous !</b></p>
                
{/*                
                    <button className="connect" onClick={handleClickInscription} >S'inscrire</button> */}
                
 </fieldset>
    </form>
    )
}

export default FormConnexion

