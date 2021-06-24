import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import 'reflect-metadata';
import './database';
import { router } from './routes';
import { manageErrors } from './middlewares/manageErrors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.use(manageErrors);

app.listen(3000, () => console.log('Server is running'));
