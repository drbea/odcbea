import { useState } from "react"


export default function UserForm() {
    const userData = {nom: "", prenom: "", email: "", password: ""}
    const [formData, setFormData] = useState(userData)

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const urls = "http://localhost:9100/register"
    
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
        
        <div className="container mt-5">
            <h2 className="mb-4">Formulaire d'inscription</h2>
            <form onSubmit={sendData}>
                <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" id="nom" name="nom" required value={formData.nom} onChange={handleFormChange}/>
                </div>

                <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input type="text" className="form-control" id="prenom" name="prenom" required value={formData.prenom} onChange={handleFormChange}/>
                </div>

                <div className="mb-3">
                <label htmlFor="email" className="form-label">Adresse email</label>
                <input type="email" className="form-control" id="email" name="email" required value={formData.email} onChange={handleFormChange}/>
                </div>

                <div className="mb-3">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <input type="password" className="form-control" id="password" name="password" required value={formData.password} onChange={handleFormChange}/>
                </div>

                <button type="submit" className="btn btn-primary">S'inscrire</button>
            </form>
        </div>
    )
}





