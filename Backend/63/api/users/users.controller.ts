import { Request, Response } from 'express';
import users from './users.mock';

declare module 'express' {
  interface Request {
    user?: { email: string };
  }
}

declare module 'express-session' {
  interface SessionData {
    user: { email: string };
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);

    if (user) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    users.push({ email, password });
    res.status(201).json('User registered successfully');
    return;
  } catch (err) {
    console.log('Error', err);
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    if (req.user)
      res
        .status(200)
        .json({ message: `Login successful for ${req.user.email}` });
    return;
  } catch (err) {
    console.log('Error', err);
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};

export const getUserInfo = async (req: Request, res: Response) => {
  try {
    if (req.session.user) {
      res
        .status(200)
        .json({ message: `User info for ${req.session.user.email}` });
      return;
    }
    res.status(400).json({ message: 'Please login or signup' });
    return;
  } catch (err) {
    return res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    req.session.destroy(() => {
      res.status(200).json({ message: 'Logout successful' });
      return;
    });
  } catch (err) {
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};
