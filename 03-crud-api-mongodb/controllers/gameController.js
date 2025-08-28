import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Função para LISTAR jogos
const getAllgames = async (req, res) => {
    try {
        const games = await gameService.getAll();
        res.status(200).json({ games: games });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor. " });
    }
};

//Função para CADASTRAR jogos
const createGame = async (req, res) => {
    try {
        const { title, year, genre, platform, price } = req.body;
        await gameService.create(title, year, genre, platform, price);
        res.sendStatus(201) // Código 201 (CREATED) : Recurso criado

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servido. " });
    }
};


// Função para DELETAR jogos
const deleteGame = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id) ){
        const id = req.params.id
        await gameService.delete(id)
        res.sendStatus(204) // Código 204 (NO CONTENT)
        } else {
            res.status(400).json({ error : `A ID enviada é inválida` })
            // Código 400 (BAD REQUEST) - Requisição mal formada
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: `Erro interno no servidor.`})

        // res.status(500).json({}) -> Para enviar json junto
        // res.sendStatus(500) -> Somente código de status

    }
}


// Função para ALTERAR jogos
const UpdateGame = async (req, res) => {
    
        try {

        if (ObjectId.isValid(req.params.id) ){
        const id = req.params.id
        const {title, year, genre, platform, price} = req.body
        await gameService.Update(id, title, year, genre, platform, price)
        res.sendStatus(200); // Código 200 (OK)
        } else {
            res.status(400).json({ error : `A ID enviada é inválida` }) // Código 400 (BAD REQUEST)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: `Erro interno no servidor.`})
    }

}

export default { getAllgames, createGame, deleteGame, UpdateGame };


