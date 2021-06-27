# NLW - Together (trilha Node)

---

Neste repositório esta presente o código que eu produzi durante a [Next Level Week - Together](https://github.com/Hiago75/nlw-node) na trilha de Node que foi orquestrada pela professora Dani Leão.

## 🚀 Next Level Week

---

A Next Level Week é um evento realizado pela [Rocketseat](https://rocketseat.com.br/) anualmente aonde são propostas várias trilhas diferentes coordenadas por diferentes professores. Nestas trilhas são produzidos projetos focados na tecnologia principal da trilha em questão (React, Node, Flutter, etc...).

No caso da trilha de Node (a que eu escolhi) foi produzida uma API chamada NLW Valoriza, uma API de elogios.

### NLW Valoriza

Esta API como intuito proporcionar a capacidade de enviar elogios de um usuário para o outro. Nestes elogios estão presentes tags criadas separadamente por usuários com permissão de administrador, o nome personalizado da tag, uma mensagem, o usuário que enviou e o usuário que recebeu.

Outros recursos presentes são:

- Listar os elogios enviados pelo usuário autenticado
- Listar os elogios recebidos pelo usuário autenticado
- Listar as tags
- Criar usuários
- Listar os usuários
- Listar os usuários com permissão de administrador
- Autenticar o usuário com JWT

## 🧩 Tecnologias Usadas
---
### Durante a NLW

- TypeScript
- NodeJS
- Express
- TypeORM
- SQLite
- JWT - Jason Web Token
- BCryptJS
- UUID
- Cors

### Milha extra
- Validator
- Docker
- PostgreSQL
- ESLint
- Prettier

## O que foi feito ?

---

### Durante a NLW

- [x] Aprender os conceitos do Node, TypeScript, Express, TypeORM
- [x] Aprender a história do Node e porque ele foi criado
- [x] Aprender sobre o APIs
- [x] Aprenser sobre TypeORM, Banco de dados relacional, Migrations, entidades, controllers, services, middlewares, chaves estrangeiras
- [x] Aprender sobre JWT
- [x] Criar um projeto unindo todos esses conceitos e um pouco mais 

### A milha extra

- [x] Classe personalizada de erro expansível através de criação de subclasses que herdam uma classe abstrata (OCP)
- [x] Banco de dados alterado para PostgreSQL
- [x] Refatorado o maximo possível do código (com base no tempo disponível)
- [x] Melhorada a arquitetura de pastas
- [x] Melhorada a arquitetura de arquivos
- [x] Criado nova busca para users (buscar por administradores)
- [x] Criar validators para os services afim de separar as validações da classe principal
- [x] Fazer comentários pelo código
- [x] "Tipar" as funções, classes e métodos

### Além da milha extra

- [ ] Otimizar ainda mais o código
- [ ] Comentar o código inteiro
- [ ] Fazer testes com Jest
- [ ] Fazer sistema de disparo de e-mails (não foi feito na milha extra pela ausencia de um dominio)
- [ ] Colocar em produção
- [ ] Fazer o Front-End



## Como funciona ?

---

A aplicação não sofreu deploy ainda, ou seja, não está no ar, sendo assim ainda não é possível acessa-la de forma externa mas você pode acessar a mesma direta no seu computador, para isso basta seguir os seguintes passos:

- Clone o repositório usando Git
- Rode `npm i` ou `yarn` para baixar as dependências
- Use `docker-compose up -d` para criar o banco de dados com o Docker (é necessário ter ambos, Docker e Docker-compose instalados)
- Rode `npm typeorm migration:run` para criar as tabelas dentro do banco de dados
- Rode `npm run dev`  ou `yarn run dev` para iniciar a API

A API estará disponível em `[http://localhost:3000](http://localhost:3000)` e suas requisições podem ser feitas por programas como Insomnia ou até a extensão Thunder Client do VSCode.

As rotas disponíveis são:

- /users (POST) - Cria um usuário
- /users (GET) - Lista todos os usuários
- /users/compliments/received (GET) - Lista todos os elogios recebidos pelo usuário autenticado
- /users/compliments/sent (GET) - Lista todos os elogios enviados pelo usuário autenticado
- /users/admin (GET) - Lista os usuários com cargo de administrador
- /auth (POST) - Cria o Token de autenticação
- /tags (POST) - Cria tags
- /tags (GET) - Lista todas as tags
- /compliments (POST) - Cria elogios
