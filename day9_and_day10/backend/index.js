

const express = require("express")
const cors = require("cors")

const app = express();
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


const PORT = 9100
app.listen(PORT, () => console.log("API running on port: ", PORT))