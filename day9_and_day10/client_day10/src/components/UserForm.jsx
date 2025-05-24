import { useState } from "react"


export default function UserForm() {
    const userData = {nom: "", prenom: "", email: "", password: ""}
    const [formData, setFormData] = useState(userData)

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        
        <div class="container mt-5">
            <h2 class="mb-4">Formulaire d'inscription</h2>
            <form>
                <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" name="nom" required value={formData.nom} onChange={handleFormChange}/>
                </div>

                <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="prenom" name="prenom" required value={formData.prenom} onChange={handleFormChange}/>
                </div>

                <div class="mb-3">
                <label for="email" class="form-label">Adresse email</label>
                <input type="email" class="form-control" id="email" name="email" required value={formData.email} onChange={handleFormChange}/>
                </div>

                <div class="mb-3">
                <label for="motdepasse" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="motdepasse" name="motdepasse" required value={formData.password} onChange={handleFormChange}/>
                </div>

                <button type="submit" class="btn btn-primary">S'inscrire</button>
            </form>
        </div>
    )
}