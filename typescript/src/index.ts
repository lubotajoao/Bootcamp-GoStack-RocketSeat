import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Salut le monde!!!" });
});

app.listen(3333);
