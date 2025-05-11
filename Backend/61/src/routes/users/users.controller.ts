import { Request, Response, RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import UserModel, { IUser, IUserDocument } from '../../models/User';

// export const listUsers = async (_req: Request, res: Response) => {
//   const users = await list();
//   res.status(200).json(users);
// };
//
// export const renderUsers = async (_req: Request, res: Response) => {
//   try {
//     const users = await list();
//     return res.render('users', { usersList: usersData });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
//
// export const renderUserId = (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const user = usersData.find((user) => user.id === Number(id));
//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//     }
//     return res.render('users', { user });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({
      email,
    });

    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
    }
    const hash = await bcrypt.hash(password, 10);

    const doc = new UserModel<IUser>({
      email,
      name,
      password: hash,
    });

    const user: IUserDocument = await doc.save();

    const { ...userData } = user._doc ?? {};

    res.status(201).json({ ...userData });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Registration error' });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET не определен');
    }
    const user: IUserDocument = await UserModel.findOne({
      email: req.body.email,
    }).orFail();

    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }

    const isValidPassword: boolean = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      res.status(400).json({ message: 'Invalid login or password' });
      return;
    }

    const token = jwt.sign(
      { email: user.email, role: 'user' },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 1000,
    });
    const { ...userData } = user._doc ?? {};
    res.status(200).json({ email: userData.email, name: userData.name, token });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Login error' });
    return;
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000,
  });
  res.status(200).json({ message: 'Logout success' });
  return;
};
