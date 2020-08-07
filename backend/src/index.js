const express = require("express");

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações no back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end (PaTCH é para apenas uma informação)
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros: formas que o client tem de enviar uma requisição
 *
 * Query Params: Utilizado principalmente para filtros e paginação.
 * Route Params: Identificar recursos na hora de atualizar ou deletar
 * Request Body: Conteúdo na hora de criar ou editar um recurso (feito através de JSON)
 */

app.get("/projects", (request, response) => {
  const { title, owner } = request.query;
  console.log(title);
  console.log(owner);

  return response.json(["Projeto1", "Projeto2"]);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json(["Projeto1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json(["Projeto4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("🚀️ Back-end Started!");
});
