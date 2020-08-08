import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import "./App.css";
import backgroundImage from "./assets/background.jpg";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de App",
    "Front-end Web",
    "NodeJS",
  ]);

  // useState retorna um array com 2 posições:
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizar este valor inicial

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    // ...alguma coisa <-> spread operator
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Homepage" />

      <img width={300} src={backgroundImage} alt="" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
