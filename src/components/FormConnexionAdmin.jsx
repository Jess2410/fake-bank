import React from "react"
import logo from "../assets/svg/logo.svg"

const FormConnexionAdmin=()=>{
    const handleClickAccueil=(e)=>{
        e.preventDefault()
        window.location.href = "/"
        
      }
    // const handleClickInscription=(e)=>{
    //     e.preventDefault()
    //     window.location.href = "/inscription"
    //   }
    return( 
    
        <form className="form--connexion">
            <div className="container">
    <img className="logo" src={logo} alt="logo" />
            <fieldset>
                <legend ><h2>Connexion</h2></legend>
                <div className="input-style">
                        <div className="input-style">
                            <label>Email</label>
                            <input type="text" id="mail" placeholder="exemple@mail.com"/>
                        </div>
                </div>
                <div className="input-style">
                        <div className="input-style">
                            <label>Mot de passe</label>
                            <input type="password" id="password" placeholder="********"/>  
                        </div> 
                </div>  
                <div></div>   <div className="row">
                <button className="btn-border" type="button" onClick={handleClickAccueil}>Retour</button>
                <button className="connect " type="submit" >Connexion</button>
                </div>
                <p className="text-promotion"><b>Problème de connexion ? Veuillez contacter le service Support au 0 800 800 800.</b></p>
                
{/*                
                    <button className="connect" onClick={handleClickInscription} >S'inscrire</button> */}
          
 </fieldset>
      </div>    </form>
    )
}

export default FormConnexionAdmin