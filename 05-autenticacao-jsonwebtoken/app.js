import express from "express";
import mongoose from "mongoose";

// Importando para ser criado no banco
import User from "./models/Users.js";
import Game from "./models/Games.js";

// Importando as rotas de Games
import gameRoutes from "./routes/gameRoutes.js";

//importando as rotas de Users
import userRoutes from "./routes/userRoutes.js";

const app = express();


// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', gameRoutes);
app.use('/', userRoutes);

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

