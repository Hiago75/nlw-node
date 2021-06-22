import "reflect-metadata";
import express from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

/* É responsável por colocar nosso servidor no ar, recebe 2 argumentos, sendo o primeiro a porta em que o server vai ser hospedado e o segundo uma função callback que será executada assim que o servidor for iniciado*/
app.listen(3000, () => console.log('Server is running'))
