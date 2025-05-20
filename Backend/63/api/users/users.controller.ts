import { Request, RequestHandler, Response, NextFunction } from 'express';
import { User } from './user.model';
import passport from 'passport';

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

    const user =  new User({ email, password });
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


export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    passport.authenticate('local', (err: any, user: any, info: any) => {
      if (err) {
        console.log('Authentication error:', err);
        return next(err);
      }

      if (!user) {
        console.log('No user found');
        return res.status(401).json({ message: 'Неверный email или пароль' });
      }

      req.logIn(user, (err) => {
        if (err) {
          console.log('Login error:', err);
          return next(err);
        }

        console.log('User authenticated:', user.email);
        return res.status(200).json({
          message: `Успешная авторизация: ${user.email}`,
          user: { email: user.email }
        });
      });
    })(req, res, next);
  } catch (error) {
    console.log('Unexpected error:', error);
    return res.status(500).json({ message: 'Ошибка сервера' });
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
    const users = await User.find().select('-password');
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
