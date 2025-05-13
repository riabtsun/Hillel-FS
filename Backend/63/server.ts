import express, { Express, NextFunction, Request, Response } from 'express';
import { CustomError } from './api/errors/CustomError';
import * as http from 'node:http';
import morgan from 'morgan';
import configPassport from './config/passport';

const port = process.env.PORT || 3000;

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
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

app.use(
  '/',
  (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error('Error middleware:', err);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
      message: err.message || 'Internal Server Error',
      details: err.details || null,
    });
  }
);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
