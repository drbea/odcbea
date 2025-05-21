import { useState } from "react"
import "../assets/css/SigninForm.css"
import { useNavigate } from "react-router-dom"


export default function SignupForm(){
  const userInfo = {username: "", email: "", password: "", password1: ""}
  const [user, setUserInfo] = useState(userInfo)
  const navigate = useNavigate()

  const handleUserChange = function(e){
    e.preventDefault();
    console.log(`${e.target.name}: ${e.target.value} `)
    
    setUserInfo({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (user.username.trim() == "" || user.email.trim() == "" || user.password.trim() == "" ||  user.password1.trim() == "" ){
      alert("Donnees invalide!!!")
      return;
    } 
    else{
      if(user.password !== user.password1){
        alert("Les mots de pass ne sont pas identique")
      } else{
      const newUser = {username:  `${user.username}`, email: `${user.email}`, password: `${user.password}`}
      localStorage.setItem(`${user.email}`, JSON.stringify(newUser) )
      alert("Success" + `${user.email}: ${user.password} `)
      navigate("/signin")
      return;}

    }
    
    setUserInfo(userInfo);
  }

    return (
        <div className="auth-container">
          <section className="register-section">
            <h2>Inscription</h2>
            <form action="/register" method="POST" className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="register-name">Nom complet</label>
              <input type="text" id="register-name" name="username" required onChange={handleUserChange} value={user.username}/>

              <label htmlFor="register-email">Adresse e-mail</label>
              <input type="email" id="register-email" name="email" required onChange={handleUserChange} value={user.email}/>

              <label htmlFor="register-password">Mot de passe</label>
              <input type="password" id="register-password" name="password" required onChange={handleUserChange} value={user.password}/>

              <label htmlFor="register-confirm-password">Confirmer le mot de passe</label>
              <input type="password" id="register-confirm-password" name="password1" required onChange={handleUserChange} value={user.password1}/>

              <button type="submit">S'inscrire</button>
            </form>
          </section>
        </div>
    )
}







