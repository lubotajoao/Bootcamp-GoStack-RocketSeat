# Bootcamp-GoStack-RocketSeat

## **Conceitos NodeJS e TypeScript**

Serão abordados a maioria dos conceitos iniciais do NodeJS, ReactJS e React Native. Será construída a primeira aplicação integrando as três ferramentas (Node.JS, ReactJS e React Native). Será visto também o conceito  de tipagem no JavaScript, utilizando o TypeScript.

## **Primeiro Projeto com NodeJS**

**Configuração do projeto do total zero utilizando NodeJS e TypeScript incluindo ferramentas como:**

- **EditorConfig:** Padronização de configuração para vários desenvolvedores que trabalham em um mesmo projeto, com diferentes editores de código ou IDE's e com diferentes sistemas operacionais (GNU/Linux, MacOS ou Windows).
  
- **ts-node-dev** (com as suas exceções para tornar a transpilação mais rápida no momento de desenvolvimento da aplicação);
  
- **ESLint:** Utilizado para automatização padronizado do código, seguindo modelo popular do Airbnb;
  
- **Prettier:** Ferramenta complementar para padronização de código, como adição de ponto e vírgula no final das linhas, quebra de linha (+80 caracteres), etc;

### **Conceitos Abordados**

- **SoC (Separation of Concerns):** Esse princípio zela pela separação de responsabilidades de cada arquivo. Exemplo: as rotas não devem ser responsáveis por lidar com a persistência dos dados, isso fica por conta do Repository. Já o Repository não é responsável pela tratativa das regras de negócio, isso é responsabilidade dos Services;

- **Rota:** Tem a responsabilidade de receber uma requisição, chamar outro arquivo, devolver uma resposta. Toda vez que uma **rota** tiver responsabilidades para além destas 3, provavelmente a lógica deve ser abstraída dentro de um **Service**, que trata das regras de negócio.

- **Model** ou **Entidade:** Estrutura de persistência de dados da aplicação "em algum lugar (banco de dados ou em memória".

- **Repositório:** Que trabalha com os dados  persistidos pelo **Model**. Consiste em uma ponte entre a aplicação e a fonte de dados, e executa métodos como listagem, busca, criação, edição, remoção, etc.

- **DTO - Data Transfer Object:** Para transmitir dados de um arquivo para outro, é recomendável utilizar objeto no JavaScript.
  
  - Na utilização do conceito DTO, faz-se necessário tornar **parâmetros nomeados** através da desestruturação (objetos manipuláveis).
  
- **Omit**<key, object>: Para excluir uma propriedade de dentro deu um tipo. Define a imutabilidade externa do objeto, ou seja, todos os outros dados podem vir externamente, excepto o objeto especificado.

- **Service:** Armazena a regra de negócio da aplicação, abstraíndo regras de negócio das rotas. O service deve possuir apenas um método (ex.: execute(), run(), etc.) e tem um nome descritivo.
  - O **service** nunca tem acesso as requisições e respostas.

- **DRY (Don't Repeat Yourself):** Esse princípio zela pelo maior reaproveitamento de código. Esse princípio não preza necessariamente pela não-repetição de código e sim regras de negócio. Exemplo: ao criar Services e Repositories, você possibilita a reutilização desses códigos no restante da aplicação.

- **SRP (Single Responsability Principle):** Esse princípio zela que uma classe deve possuir apenas uma responsabilidade. Exemplo: Ao criar um service chamado createTransactionService, devemos garantir que no seu único método (execute()) seu trabalho seja apenas a criação de uma transação.

- **DIP (Dependency Inversion Principle):** Esse princípio zela que uma entidade dependa apenas de abstrações, não de implementações. Exemplo: Ao atribuir ao Repository a comunicação com o Banco de dados, o Service precisa interagir apenas com essa abstração, sem precisar criar uma nova instância e realizar as ações diretamente.

### **Bibliotecas Utilizadas**

- **express:** para gerenciamento de rotas.
- **uuid:** para criação aleatória do ID.
- **date-fns:** para lidar com a tratativa de data e hora.

## **Iniciando o Back-end do App**

Nesta etapa continuamos o aprendizado com NodeJS, com os conhecimentos adquiridos até agora, ampliamos os estudos com os conceitos de banco de dados, autenticação, autorização, etc.

