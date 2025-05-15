import { Request, RequestHandler, Response } from 'express';
import { User } from './user.model';

declare module 'express' {
  interface Request {
    user?: { email: string };
  }
}

declare module 'express-session' {
  interface SessionData {
    user: {
      email: string;
    };
  }
}

export const register: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = await User.create({ email, password });
    await user.save();
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
    if (!req.user?.email) {
      res.status(400).json({ message: 'User not found' });
      return;
    }

    const user = await User.findOne({ email: req.user.email });
    res.status(200).json({ message: `Login successful for ${user?.email}` });
    return;
  } catch (err) {
    console.log('Error', err);
    return res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
  }
};

export const getUserInfo: RequestHandler = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user) {
      res.status(200).json({ message: `User info for ${req.session?.user}` });
      return;
    }
    res.status(400).json({ message: 'Please login or signup' });
  } catch (err) {
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
    return;
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
    return;
  }
};

export const getAllUsers: RequestHandler = async (_req, res) => {
  try {
    const users = await User.find().select('password');
    res.status(200).json(users);
    return;
  } catch (err) {
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};
