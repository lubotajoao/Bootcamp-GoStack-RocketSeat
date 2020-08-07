const express = require("express");
// const { uuid } = require("uuidv4");

const { v4: uuid_v4 } = require("uuid");

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
 * Request Body: Conteúdo na hora de criar ou editar um recurso (através de JSON)
 */

const projects = [];

app.get("/projects", (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.json(results);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid_v4(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;

  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found!" });
  }

  const project = { id, title, owner };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found!" });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log("🚀️ Back-end Started!");
});
