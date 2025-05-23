

const express = require("express")
const cors = require("cors")

const app = express();
app.use(cors({
    origin: "http://localhost:513"
}))     // Autorise les requêtes depuis d'autres domaines (React)
app.use(express.json())   // Permet de lire les JSON envoyés

app.get("/api/hello", (req, res) => {
    const data = {message: "Hello From node js backen "}
    res.json(data)
})


const PORT = 9100
app.listen(PORT, () => console.log("API running on port: ", PORT))