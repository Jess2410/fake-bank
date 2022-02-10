import React from "react"

const FormConnexion=()=>{
    const handleClickAccueil=(e)=>{
        e.preventDefault()
        window.location.href = "/"
        
      }

      const handleSubmit=(e)=>{
        e.preventDefault()
        window.location.href = "/dashboardclient"
        
      }
    // const handleClickInscription=(e)=>{
    //     e.preventDefault()
    //     window.location.href = "/inscription"
    //   }
    return(
        <form className="form--connexion">
            <fieldset>
                <legend ><h2>Connexion</h2></legend>
                <div className="input-style">
                        <div className="input-style">
                            <label>Email</label>
                            <input type="text" id="mail" name="email" placeholder="exemple@mail.com"/>
                        </div>
                </div>
                <div className="input-style">
                        <div className="input-style">
                            <label>Mot de passe</label>
                            <input type="password" id="password" name="password" placeholder="********"/>  
                        </div> 
                </div>  
                <div></div>   <div className="row">
                <button className="btn-border" type="button" onClick={handleClickAccueil}>Retour</button>
                <button className="connect " type="submit" onClick={e => handleSubmit(e)} >Connexion</button>
                </div>
                <p className="text-promotion"><b>Vous n'avez pas de compte ? Inscrivez-vous dès maintenant pour organiser vos rendez-vous !</b></p>
                
{/*                
                    <button className="connect" onClick={handleClickInscription} >S'inscrire</button> */}
                
 </fieldset>
    </form>
    )
}

export default FormConnexion

