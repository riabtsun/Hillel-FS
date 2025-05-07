import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import indexRouter from './routes/index.router';

mongoose
  .connect('mongodb://localhost:27017/pug')
  .then(() => {
    console.log('DB Ok');
  })
  .catch((err) => {
    console.log('DB error', err);
  });

const app: Express = express();

app.set('view engine', 'pug');
app.set('views', path.normalize(__dirname + '/views'));
app.use(express.static('/public'));

app.use('/', express.json(), indexRouter);
app.get('/', (_req: Request, res: Response) => {
  return res.render('index');
});

app.listen(4444, (error) => {
  if (error) {
    return console.log(`Server error ${error}`);
  }
  console.log('Server OK');
});
