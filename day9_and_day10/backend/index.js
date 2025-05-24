

const express = require("express")
const cors = require("cors")

const app = express();
const mysql = require("mysql2")

app.use(cors({
    origin: "http://localhost:5173"
}))     // Autorise les requêtes depuis d'autres domaines (React)
app.use(express.json())   // Permet de lire les JSON envoyés

app.get("/api/hello", (req, res) => {
    const data = {message: "Hello From node js backen "}
    res.json(data)
})

app.post("/api/data", (req, res) => {
    const formData = req.body;
    console.log("\n\n")
    console.log("données reçu du frontend:  " + formData);
    console.log("\n\n")
    console.log(req)
    res.status(200).json({message: "donnees recu avec succees"});
})


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "odc",
    port: "3307",
})

db.connect((err) => {
    if (err) {
        console.log("Impossible de se connecter a la base de donnees");
        return;
    }
    console.log("Conection a ODC reussie")
})

app.post("/register", (req, res) => {
    const data = req.body;

    if (!data.nom && !data.prenom && !data.email && !data.password) { 
        throw new Error("Données invalide ")       
    }

    db.query(
        'insert into Utilisateur (prenom, nom, email, password) value(?, ?, ?, ?)',
        [data.prenom, data.nom, data.email, data.password],
        (err, result) => {
            if(err){
                console.log("impossible d'inserer un utilisateur");
                return;
            }
            console.log("Enregistrement Reussie.");
            res.json(result);
        }
    )

    console.log(data)
})


const PORT = 9100
app.listen(PORT, () => console.log("API running on port: ", PORT))