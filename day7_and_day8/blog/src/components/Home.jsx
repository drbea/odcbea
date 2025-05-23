import { useState } from "react"
import "../assets/css/Home.css"
import * as Yup from "yup"

export default function Home(){
    const loggedUser = sessionStorage.getItem("last_user")
    const data = {email: ""}

    const [mail_data, setMail] = useState(data)
    const [errors, setError] = useState({})


    const handleMailChange = function(e){
        // e.preventDefault();
        //console.log(`${e.target.name}: ${e.target.value} `)

        const {name, value} = e.target
        const p = {...mail_data, [name]: value}
        setMail(p)

        // Supprimer l'erreur a chaque fois que le champ change
/*        if(errors[name]){
            setError({...errors, [name]: ""})
        }*/
    }


    const schema = Yup.object().shape({
        email: Yup.string()
                .required("L'address mail est requis ")
                .min(6, "Address trop court, doit contenir (6 caractere au minimum)")
                .email("Enter a valid email")
    })

    // schema.validate(data, {abortEarly: true})
    // .then((valid) => {console.log(valid);
    // }).catch((er) => {
    //     er.inner.forEach(e => {
    //         console.log(e.path, e.message);
    //     })
    // })

    const subscribe = async (e) => {
        e.preventDefault()

        try {
            await schema.validate(mail_data, {abortEarly: false})
            setError({})
            console.log("dans try: ✅ Email valide :", mail_data.email);
        } catch(validationError) {
            const errObject = {}

            if (validationError instanceof Yup.ValidationError) {
                console.log("dans catch: ", validationError)
                validationError.inner.forEach(err => {
                    if (!errObject[err.path]) {
                        console.log("dans if validationError: ", err.errors)
                        errObject[err.path] = err.errors.join("\n")
                    }
                });
            }

            setError(errObject);
        }
    }

    return (
        <>
            <h1>Home page</h1>

            <div className="newsletter-container">
                <h2>Inscrivez-vous à notre newsletter</h2>
                <form onSubmit={subscribe} id="newsletter-form">
                    <span style={{backgroundColor: "red", fontSize: "0.9em" }}>{errors.email}</span>
                    <input type="email" name="email" value={mail_data.email} onChange={handleMailChange} placeholder="Entrez votre e-mail" required/>
                    <button type="submit">S'inscrire</button>
                </form>
                <div className="success-message" id="success-message">Merci pour votre inscription !</div>
            </div>
        </>
    )
}


