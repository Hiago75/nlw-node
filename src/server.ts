import express from 'express';

const app = express();

app.get('/test', (request, response) => {
  return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
  return response.send('Olá NLW método Post')
})


/* É responsável por colocar nosso servidor no ar, recebe 2 argumentos, sendo o primeiro a porta em que o server vai ser hospedado e o segundo uma função callback que será executada assim que o servidor for iniciado*/
app.listen(3000, () => console.log('Server is running')) 
