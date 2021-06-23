import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";
import "reflect-metadata";
import './database';
import { router } from './routes';
import { manageErrors } from './middlewares/manageErrors';

const app = express();

app.use(express.json());
app.use(router);

app.use(manageErrors)

app.listen(3000, () => console.log('Server is running'))
