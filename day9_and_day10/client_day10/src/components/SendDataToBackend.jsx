import { useEffect, useState } from 'react'


export default function SendDataToBackend() {
    // const [msg, setMessage] = useState("")
    const [formData, setFormData] = useState({username: "", email: ""})

    const handleFormChange = (e) => {
        const {name, value} = e.target

        setFormData({...formData, [name]: value})
        console.log(name, value)
      // console.log(JSON.stringify(formData))
    }

    const urls = "http://localhost:9100/api/data"
    
    const sendData = async (e) => {
    e.preventDefault()
    try {
        const response = await fetch(urls, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
    })
        const data = await response.json()
        console.log("Sousmis avec Succèss ", data)
    } 
    catch (error) { 
        console.log("Erreur lors de l'envoi ", error)
    }
    }

    return (
    <div className="auth-container" >
            <section className="login-section" >
            <h2 style={{textAlign: "center" }}>User Info</h2>

            <form onSubmit={sendData} style={{display: "flex", flexDirection: "column", width: "500px", margin: "0 auto" }} action="" method="POST" className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleFormChange}  />

                <label htmlFor="email">Adresse e-mail</label>
                <input type="email" id="email" name="email"  value={formData.email} onChange={handleFormChange} />

                <button type="submit">Valider</button>
            </form>
            </section>
    </div>
)
}
