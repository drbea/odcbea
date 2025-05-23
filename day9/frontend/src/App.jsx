import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [msg, setMessage] = useState("")
    const [formData, setFormData] = useState({username: "", email: ""})

    const handleFormChange = (e) => {
      const {name, value} = e.target

      setFormData({...formData, [name]: value})
    }

    const urls = "http://localhost:9100/api/hello"

    useEffect(() => {
      fetch(urls)
          .then((res) => res.json())
          .then((data) => {
            setMessage(data.message);
          })
          .catch((err) => {
            console.log(err)
          })
    }, [])

  return (
    <>
      <h2>Message:: {msg || "no message"}</h2>

      <div className="auth-container">
            <section className="login-section">
            <h2>Connexion</h2>

            <form style={{display: "flex", flexDirection: "column"}} action="/login" method="POST" className="login-form">
                <label htmlFor="login-email">Adresse e-mail</label>
                <input type="email" id="login-email" name="email" />

                <label htmlFor="username">Nom</label>
                <input type="text" id="username" name="username"  />

                <button type="submit">Valider</button>
            </form>
            </section>
        </div>
    </>
  )
}

export default App;



