import express from 'express'
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router();

// A camada de routes será responsável por conter os ENDPOINTS(rotas) da API
gameRoutes.get("/games", gameController.getAllgames)

// ENDPOINT para LISTAR
gameRoutes.get("/games", gameController.getAllgames);

// ENDPOINT para CADASTRAR
gameRoutes.post("/games", gameController.createGame);

// ENDPOINT para DELETAR
gameRoutes.delete("/games/:id", gameController.deleteGame);

// ENDPOINT para ALTERAR
gameRoutes.put("/games/:id", gameController.UpdateGame);

// ENDPOINT para LISTAR um ÚNICO jogo
gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;

