import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import { Express } from 'express-serve-static-core';

import { errorHandler } from './middlewares/errorHandler';
import { dbConnect } from './database';
import { userRoutes, tagsRoutes, complimentsRoutes, authRoutes } from './routes';

dotenv.config();
dbConnect();

class App {
  private _app: Express;

  constructor() {
    this._app = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  get app() {
    return this._app;
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/tags', tagsRoutes);
    this.app.use('/compliments', complimentsRoutes);
    this.app.use('/auth', authRoutes);
  }

  errorHandler() {
    this.app.use(errorHandler);
  }
}

export default new App().app;
