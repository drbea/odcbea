import { useState } from "react";
import "../assets/css/SigninForm.css"
import { Await, useNavigate } from "react-router-dom";

import * as Yup from "yup"

export default function SigninForm(){
    const userInfo = {email: "", password: ""}
    const [user, setUserInfo] = useState(userInfo)

    const [formData, setFormData] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleUserChange = function(e){
      e.preventDefault();
      console.log(`${e.target.name}: ${e.target.value} `)
      const {name, value} = e.target
      
      setUserInfo({...user,[name]: value})

      setFormData({...formData, [name]: value})
      validateData(e)
      if (errors[name]) {
        setErrors({...errors, [name]: ""})
      }
    }

    const formSchema = Yup.object().shape({
      email: Yup.string()
              .required("L'address mail est obligatoire")
              .min(6, "short Mail Address, it may contain (6 caracters at less)")
              .email("Enter a valid email"),
      password: Yup.string()
              .min(8, "The password may have 8 caractere")
              .matches(/[a-z]/, 'Le mot de passe doit contenir au moins une lettre minuscule')
              .matches(/[A-Z]/, 'Le mot de passe doit contenir au moins une lettre majuscule')
              .matches(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
              .matches(/[@$!%*?&]/, 'Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)')
    })

  const validateData = async (e) => {
    e.preventDefault()

    try {
      await formSchema.validate(formData, {abortEarly: false})
      setErrors({})
      console.log("email valide: ", formData.email)
      console.log("mot de pass valide : ", formData.password)
    } catch (validationError) {
      const errorObject = {}

      if (validationError instanceof Yup.ValidationError) {
        // console.log("dans catch: ", validationError)
        validationError.inner.forEach(errorItem => {
          if (!errorObject[errorItem.path]) {
            // console.log("dans if validationError: ", errorItem.errors)
            errorObject[errorItem.path] = errorItem.errors.join("\n")
          }
        }) 
      }
      setErrors(errorObject)
    }
  }


    const handleSubmit = (e)=>{
      e.preventDefault();
      const userData = localStorage.getItem(user.email)

      if (user.email.trim() == "" || user.password.trim() == "" || !userData){
        alert("Donnees invalide!!!")
        
      }
      else {
        // alert("user data: " + userData)
          const savedUser = JSON.parse(userData);
          if (savedUser.password !== user.password) {
            alert("Mot de passe incorrect !");
            return;
          }
        
        const user_tosave = JSON.parse(userData)
        sessionStorage.clear()
        sessionStorage.setItem("last_user", JSON.stringify(user_tosave))
        navigate("/")
        alert("Success")
        setUserInfo(userInfo);
      }
    }
    const errstyle = {color: "red", fontSize: "0.9em" }
    return (
        <div className="auth-container">
            <section className="login-section">
            <h2>Connexion</h2>

            <form action="/login" method="POST" className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="login-email">Adresse e-mail</label>
                <span style={errstyle}>{errors.email}</span>
                <input type="email" id="login-email" name="email" onChange={handleUserChange}  value={user.email}/>

                <label htmlFor="login-password">Mot de passe</label>
                <span style={errstyle}>{errors.password}</span>
                <input type="password" id="login-password" name="password"  onChange={handleUserChange} value={user.password}/>

                <button type="submit">Se connecter</button>
            </form>
            </section>
        </div>
    )
}





