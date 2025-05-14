import { NextFunction, Request, RequestHandler, Response } from 'express';
import users from './users.mock';

declare module 'express' {
  interface Request {
    user?: { email: string };
  }
}

export const register: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);

    if (user) {
      res.status(400).json({ message: 'User already exists' });
    }

    users.push({ email, password });
    res.status(201).json('User registered successfully');
  } catch (err) {
    console.log('Error', err);
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    if (!req.user?.email) {
      return res.status(400).json({ message: 'User not found' });
    }

    res.status(200).json({ message: `Login successful for ${req.user.email}` });
  } catch (err) {
    console.log('Error', err);
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
  }
};

export const getUserInfo: RequestHandler = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.status(200).json({ message: `User info for ${req.session?.user}` });
    }
    res.status(400).json({ message: 'Please login or signup' });
  } catch (err) {
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
  }
};

export const logout: RequestHandler = async (req, res, next) => {
  try {
    req.logout((err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Logout successful' });
    });
  } catch (err) {
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
  }
};
