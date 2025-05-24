

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



/*
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'odc',
    password: 'odc123',
    database: 'odc'
}

const db = mysql.createConnection(config);

db.connect((err) => {
    if (err){
        console.log('impossible de se connecter a la base de donnee');
        return;
    }

    console.log('Connexion a ODC effectuée');
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/save', (request, response) => {
    const {id, nom, telephone} = request.body;

    if (!nom || nom === '' || !telephone || telephone === ''){
        response.json({message: "Vous devez des donnee des valeurs pour chaque champs"});
        return;
    }

    if (id){
        db.query('update person set nom = ?, telephone = ? where id = ?',[nom, telephone, id], (err, result) => {
            if (err){
                console.log("Impossible de modifier l'enregistrement: " + id);
                console.log(err);
                return;
            }

            response.json({data: result});
        })

        return;
    }

    db.query(
        `insert into person (nom, telephone) values(?, ?)`,
        [nom, telephone],
        (er, result) => {
        if (er){
            console.log("Impossible d'enregistrer les donnees", er);
            return;
        }

        console.log('Donnee enregistree avec succes: ', result);

        response.json(result);
    })

})

app.get('/list', async (request, response) => {
    db.query('select * from person', (err, results) => {
        if (err){
            console.log("Impossible de recuperer les donees ", err);
            return;
        }

        response.json({data: results});
    })
})

app.delete('/delete/:id', (req, res) => {
    const param = req.params.id;
    db.query('delete from person where id = ?', [param], (err, result) => {
        if (err){
            console.log("Impossible d'effectuer la suppresion");
            return;
        }

        res.json("Suppression effectuée avec succes");
        console.log('Suppresion de la personne avec id: ' + param + ' effectuée')
    });
})

app.get(`/person/:id`, (req, res) => {
    const param = req.params.id;

    db.query('select * from person where id = ?', [param], (err, result) => {
        if (err){
            console.log('impossible de trouver la personne avec id ', param);
            return;
        }

        res.json({data: result});
    })
})


app.listen(port, () => {
    console.log(`server set up and running at localhost:${port}`);
})
*/