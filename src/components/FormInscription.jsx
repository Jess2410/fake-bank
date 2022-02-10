import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../app.config";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { helperToast } from "../helpers/helperToast"
  

  const inputs = {
      lastname: "",
        firstname:"",
        birthday: "",
        email: "",
        password: "",
        }

  const FormInscription=()=>{
    const history = useHistory()
    const [form, setForm] = useState(inputs);
    const [emailConfirm, setEmailConfirm] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async  (e) => {
        e.preventDefault()
        if (emailConfirm === form.email && passwordConfirm === form.password ) {
            toast.promise(axios.post(`${BASE_URL}user`, form).then(res => {
                console.log("🚀 ~ file: FormInscription.jsx ~ line 34 ~ toast.promise ~ res", res)
                history.push("/connexion")
            }).catch(err => {
                console.log("🚀 ~ file: FormInscription.jsx ~ line 38 ~ toast.promise ~ err", err)
                
            }), {
                pending: "Veuillez patienter !",
                success: "Vous êtes inscrit avec succès !",
                error: "Une erreur s'est produite 🤯",
              });
        } else {
            helperToast("warning", "l'email ou mot de passe ne correspond pas !")
        }
        
    }

    return(
        <form className="form--connexion"> 
    
            <fieldset>
                <legend ><h2>Inscription</h2></legend>
                    <div className="input-style-inline">
                        <div className="input-style">
                            <label>Nom</label>
                            <input type="text" id="lastname" name="lastname" placeholder="Dupont" onChange={e => handleChange(e)} />
                        </div>
                        <div className="input-style">
                            <label>Prénom</label>
                            <input type="text" id="firstname" name="firstname" placeholder="Jean" onChange={e => handleChange(e)}  />
                        </div>
                    </div> 
                        <div className="input-style">
                            <label>Date de naissance</label>
                            <input type="date" id="birthday" name="birthday" placeholder="01/01/2000" onChange={e => handleChange(e)}  />
                        </div>    
                        <div className="input-style">
                            <label>Email</label>
                            <input type="text" id="mail" name="email" placeholder="exemple@mail.com" onChange={e => handleChange(e)}  />
                        </div>  
                        <div className="input-style">
                            <label>Confirmation Email</label>
                            <input type="text" id="mail-confirm" name="mail-confirm" onChange={e => setEmailConfirm(e.target.value)} placeholder="exemple@mail.com"/>
                            <span style={{ color: "red" }}>{emailConfirm !== form.email && "L'email ne correspond pas !"}</span>
                        </div>
                        <div className="input-style">
                            <label>Mot de passe</label>
                            <input type="password" id="password2" name="password" placeholder="********" onChange={e => handleChange(e)}  /> 
                        </div>
                        <div className="input-style">
                            <label>Confirmation Mot de passe</label>
                            <input type="password" id="password-confirm" name="password-confirm" placeholder="********" onChange={e=>setPasswordConfirm(e.target.value)}/>   
                            <span style={{ color: "red" }}>{passwordConfirm !== form.password && "Le mot de passe ne correspond pas !"}</span>
                        <button className="connect " type="submit" onClick={e => handleSubmit(e)} >Valider</button>
                        <p className="text-promotion">Les données personnelles recueillies ci-dessus sont utilisées par BNP Paribas, responsable de traitement, aux fins de traitement de votre demande. Ce document est également disponible sur ce site.</p>
                
                        </div>
                   
 </fieldset>
    </form>
    )
}

export default FormInscription