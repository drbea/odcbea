import { useState } from "react";
import "../assets/css/SigninForm.css"
import { useNavigate } from "react-router-dom";


export default function SigninForm(){
    const userInfo = {email: "", password: ""}
    const [user, setUserInfo] = useState(userInfo)
    const navigate = useNavigate()


    const handleUserChange = function(e){
      e.preventDefault();
      // console.log(`${e.target.name}: ${e.target.value} `)
      
      setUserInfo({
        ...user,
        [e.target.name]: e.target.value
      })
    }


    const handleSubmit = (e)=>{
      e.preventDefault();
      const userData = localStorage.getItem(user.email)

      if (user.email.trim() == "" || user.password.trim() == "" || !userData){
        alert("Donnees invalide!!!")
        
      }
      else {
        alert("user data: " + userData)
          const savedUser = JSON.parse(userData);
          if (savedUser.password !== user.password) {
            alert("Mot de passe incorrect !");
            return;
          }
        
        const user_tosave = JSON.parse(userData)
        sessionStorage.setItem("last_user", JSON.stringify(user_tosave))
        navigate("/")
        alert("Success")
        setUserInfo(userInfo);
      }
    }
    
  


    return (
        <div className="auth-container">
            <section className="login-section">
            <h2>Connexion</h2>
            <form action="/login" method="POST" className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="login-email">Adresse e-mail</label>
                <input type="email" id="login-email" name="email" onChange={handleUserChange}  value={user.email}/>

                <label htmlFor="login-password">Mot de passe</label>
                <input type="password" id="login-password" name="password"  onChange={handleUserChange} value={user.password}/>

                <button type="submit">Se connecter</button>
            </form>
            </section>
        </div>
    )
}
