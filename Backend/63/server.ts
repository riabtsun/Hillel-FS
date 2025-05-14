import express, { Express, NextFunction, Request, Response } from 'express';
import { statusCheck } from './middlewars/status.middleware';
import MongoStore from 'connect-mongo';
import * as http from 'node:http';
import morgan from 'morgan';
import configPassport from './config/passport';

const port: Number | String = process.env.PORT || 3000;

import indexRouter from './api/index';

import session from 'express-session';
import passport from 'passport';

configPassport(passport);

const app: Express = express();
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(express.json());

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/sessions',
      collectionName: 'sessions',
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', statusCheck);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
