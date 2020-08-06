const express = require("express");

const app = express();

app.get("/projects", (request, response) => {
  return response.json({ message: "Salut le monde2!" });
});

app.listen(3333, () => {
  console.log("🚀️ Back-end Started!");
});
