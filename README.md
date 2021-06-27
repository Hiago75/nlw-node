# NLW - Together (trilha Node)

---

Neste repositório esta presente o código que eu produzi durante a [Next Level Week - Together](https://github.com/Hiago75/nlw-node) na trilha de Node que foi orquestrada pela professora Dani Leão.

## 🚀 Next Level Week

---

A Next Level Week é um evento realizado pela [Rocketseat](https://rocketseat.com.br/) anualmente aonde são propostas várias trilhas diferentes coordenadas por diferentes professores. Nestas trilhas são produzidos projetos focados na tecnologia principal da trilha em questão (React, Node, Flutter, etc...).

No caso da trilha de Node (a que eu escolhi) foi produzida uma API chamada NLW Valoriza, uma API de elogios.

### NLW Valoriza

Esta API como intuito proprorcionar a capacidade de enviar elogios de um usuário para o outro. Nestes elogios estão presentes tags criadas separadamente por usuários com permissão de administrador, o nome personalizado da tag, uma mensagem, o usuário que enviou e o usuário que recebeu.

Outros recursos presentes são:

- Listar os elogios enviados pelo usuário autenticado
- Listar os elogios recebidos pelo usuário autenticado
- Listar as tags
- Criar usuários
- Listar os usuários
- Listar os usuários com permisão de administrador
- Autenticar o usuário com JWT

[🧩 Tecnologias Usadas](readmeFiles/%20fe60b3e0fd7f4d1aa972e3d016cfa983/%F0%9F%A7%A9%20Tecnologias%20Usadas%2047d29f0734644933a4a201a5cbd9b58b.csv)

[O que foi feito ?](readmeFiles/%20fe60b3e0fd7f4d1aa972e3d016cfa983/O%20que%20foi%20feito%20278507161f6b4aba9c87a08c01769198.csv)

## Como funciona ?

---

A aplicação não sofreu deploy ainda, ou seja, não está no ar, sendo assim ainda não é possível acessa-la de forma externa mas você pode acessar a mesma direta no seu computador, para isso basta seguir os seguintes passos:

- Clone o repositório usando Git
- Rode `npm i` ou `yarn` para baixar as dependencias
- Use `docker-compose up -d` para criar o banco de dados com o Docker (é necessário ter ambos, Docker e Docker-compose instalados)
- Rode `npm typeorm migration:run` para criar as tabelas dentro do banco de dados
- Rode `npm run dev`  ou `yarn run dev` para iniciar a API

A API estará disponível em `[http://localhost:3000](http://localhost:3000)` e suas requisições podem ser feitas por programas como Insomnia ou até a extensão Thunder Client do VSCode.

As rotas disponíveis são:

- /users (POST) - Cria um usuário
- /users (GET) - Lista todos os usuários
- /usesr/compliments/received (GET) - Lista todos os elogios recebidos pelo usuário autenticado
- /users/compliments/sent (GET) - Lista todos os elogios enviados pelo usuário autenticado
- /users/admin (GET) - Lista os usuários com cargo de administrador
- /auth (POST) - Cria o Token de autenticação
- /tags (POST) - Cria tags
- /tags (GET) - Lista todas as tags
- /compliments (POST) - Cria elogios
