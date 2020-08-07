const express = require("express");

const app = express();

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações no back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end (PaTCH é para apenas uma informação)
 * DELETE: Deletar uma informação no back-end
 */

app.get("/projects", (request, response) => {
  return response.json(["Projeto1", "Projeto2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("🚀️ Back-end Started!");
});
