import express from "express";

const app = express();

// Consfigurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Criando o retorno da API
app.get("/", (req, res) => {
  const games = [
    {
      title: "Delta",
      year: 2024,
      platform: "PC (Windows)",
      price: 0,
    },
    {
      title: "Diablo III",
      year: 2009,
      platform: "PC (Windows)",
      price: 0,
    },
    {
      title: "League of Legends",
      year: 2009,
      genre: "MOBA",
      platform: "PC (Windows)",
      price: 0,
    },
  ];
  res.json(games);
});

// Rodando API da porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Rodando a API em http://localhost${port}.`);
  }
});
