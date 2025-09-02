import express from "express";
import mongoose from "mongoose";

// Importando as rotas
import gameRoutes from "./routes/gameRoutes.js";


const app = express();

import Game from "./models/Games.js";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', gameRoutes)

// Iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");


// Rodando API da porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Rodando a API em http://localhost:${port}.`);
  }
});

