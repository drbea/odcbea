import { useState } from "react"
import "../assets/css/SigninForm.css"
import { useNavigate } from "react-router-dom"

import * as Yup from "yup"

export default function SignupForm(){
  const userInfo = {username: "", email: "", password: "", password1: ""}
  const [user, setUserInfo] = useState(userInfo)

  const [formData, setFormData] = useState(userInfo)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const handleUserChange = function(e){
    e.preventDefault();
    const {name, value} = e.target
    console.log(`${name}: ${value} `)
    
    setUserInfo({...user, [name]: value})

    setFormData({...formData, [name]: value})
    validateFormSchema(e)

    setErrors({...errors, [name]: value})

    if (errors[name]) {
      setErrors({...errors, [name]: ""})
    }
  }

  const formSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, "The usermane must have 4 caracters at less")
        .matches(/[0-9]/, 'Le usernamedoit contenir au moins un chiffre'),
    password: Yup.string()
        .min(8, "The password may have 8 caractere")
        .matches(/[a-z]/, 'Le mot de passe doit contenir au moins une lettre minuscule')
        .matches(/[A-Z]/, 'Le mot de passe doit contenir au moins une lettre majuscule')
        .matches(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
        .matches(/[@$!%*?&]/, 'Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)'),
    email: Yup.string()
        .required("L'address mail est obligatoire")
        .min(6, "short Mail Address, it may contain (6 caracters at less)")
        .email("Enter a valid email"),
    password1: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
        .required('La confirmation du mot de passe est requise')
  })

  const validateFormSchema = async (e) => {
    e.preventDefault()

    try {
      await formSchema.validate(formData, {abortEarly: false})
      setErrors({})
      // console.log("email valide: ", formData.email)
      // console.log("mot de pass valide : ", formData.password)
    } catch (validationError) {
      const errObject = {}
      if (validationError instanceof Yup.ValidationError) {
        validationError.inner.forEach(errorItem => {
          if (!errObject[errorItem.path]) {
            errObject[errorItem.path] = errorItem.errors.join("\n")
          }
        })
      }
      setErrors(errObject)
    }
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
      const newUser = {username:  user.username, email: user.email, password: user.password}
      localStorage.setItem(user.email, JSON.stringify(newUser))
      alert("Success " + `${user.email}: ${user.password} `)
      navigate("/signin")
      setUserInfo(userInfo);
    }


      }

    }
    
  
    const errstyle = {color: "red", fontSize: "0.9em" }

    return (
        <div className="auth-container">
          <section className="register-section">
            <h2>Inscription</h2>
            <form action="/register" method="POST" className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="register-name">Nom complet</label>
              <span style={errstyle}>{errors.username}</span>
              <input type="text" id="register-name" name="username" required onChange={handleUserChange} value={user.username}/>

              <label htmlFor="register-email">Adresse e-mail</label>
              <span style={errstyle}>{errors.email}</span>
              <input type="email" id="register-email" name="email" required onChange={handleUserChange} value={user.email}/>

              <label htmlFor="register-password">Mot de passe</label>
              <span style={errstyle}>{errors.password}</span>
              <input type="password" id="register-password" name="password" required onChange={handleUserChange} value={user.password}/>

              <label htmlFor="register-confirm-password">Confirmer le mot de passe</label>
              <span style={errstyle}>{errors.password1}</span>
              <input type="password" id="register-confirm-password" name="password1" required onChange={handleUserChange} value={user.password1}/>

              <button type="submit">S'inscrire</button>
            </form>
          </section>
        </div>
    )
}







