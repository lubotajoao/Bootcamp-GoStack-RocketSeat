import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/apiClient';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState([]);
  const [respositories, setRespositories] = useState([]);

  // Function to add new repositories
  function handleAddRepository() {}

  const handleChange = e => {
    setNewRepo(e.target.value);
  };

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input
          value={newRepo}
          onChange={handleChange}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/14189040?s=460&u=cb9a26a2a079a66be53aa18db3ddad1b7d32bf62&v=4"
            alt="Lubota Ngola Joao"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
