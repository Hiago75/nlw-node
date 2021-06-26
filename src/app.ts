import dotenv from 'dotenv';
import { dbConnect } from './database';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';

import userRoutes from './routes/usersRoutes';
import tagsRoutes from './routes/tagsRoutes';
import complimentsRoutes from './routes/complimentsRoutes';
import authRoutes from './routes/authRoutes';
import { Express } from 'express-serve-static-core';

dotenv.config();
dbConnect();

export const app = express();

class App {
  private _app: Express;

  constructor() {
    this._app = express();
    this.middlewares();
    this.routes();
  }

  get app() {
    return this._app;
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(errorHandler);
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/tags', tagsRoutes);
    this.app.use('/compliments', complimentsRoutes);
    this.app.use('/auth', authRoutes);
  }
}

export default new App().app;
