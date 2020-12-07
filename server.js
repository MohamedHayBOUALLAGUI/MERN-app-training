const express = require("express");
require('dotenv').config();


const dbConnect=require('./config/connectDB');
const app = express();

//connect avec la base de données(juste on fait l'appel ici de la fonction à partir d'un autre fichier)
dbConnect();
// middleware global -> body parser 
app.use(express.json());
//create routes
app.use("/api/contact/",require("./routes/contacts"));



const PORT=process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("the server is running")
);
