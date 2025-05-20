import express, { Express } from 'express';
import { statusCheck } from './middlewars/status.middleware';
import { connectDB } from './config/database';
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
      mongoUrl: 'mongodb://localhost:27017/pug',
      collectionName: 'sessions',
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', statusCheck);

connectDB().then(() => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
