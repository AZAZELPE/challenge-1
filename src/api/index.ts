import { Express } from 'express';
import shortRouter from './short';
import getUrlRouter from './getUrl';

export const setUpRouter = (app: Express) => {
  app.use('/', shortRouter);
  app.use('/', getUrlRouter);
};
