import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import indexRouter from './routes/index.router';
import cookieParser from 'cookie-parser';

const app: Express = express();

mongoose
  .connect('mongodb://localhost:27017/pug')
  .then(() => console.log('DB Ok'))
  .catch((err) => console.log('DB error', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.normalize(__dirname + '/public')));
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', path.normalize(__dirname + '/views'));
app.use(express.static(path.normalize(__dirname + '/public')));

app.use('/', indexRouter);

app.get('/', (_req: Request, res: Response) => {
  return res.render('index');
});

app.listen(4444, (error) => {
  if (error) {
    return console.log(`Server error ${error}`);
  }
  console.log('Server OK');
});
