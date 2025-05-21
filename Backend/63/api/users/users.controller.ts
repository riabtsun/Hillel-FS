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

    const user = new User({ email, password });
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
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      req.logIn(user, (err) => {
        if (err) {
          console.log('Login error:', err);
          return next(err);
        }

        console.log('User authenticated:', user.email);
        return res.status(200).json({
          message: `Registration successful: ${user.email}`,
          user: { email: user.email },
        });
      });
    })(req, res, next);
  } catch (error) {
    console.log('Unexpected error:', error);
    return res.status(500).json({ message: 'Server error' });
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

export const insertManyUsers: RequestHandler = async (req, res) => {
  try {
    const users = req.body;

    if (!Array.isArray(users)) {
      res.status(400).json({ message: 'Bad request, expected an array of users' });
      return;
    }

    const emails = users.map(user => user.email);
    const existingUsers = await User.find({ email: { $in: emails } });

    if (existingUsers.length) {
      res.status(400).json({
        message: 'Some users already exist',
        duplicates: existingUsers.map(user => user.email),
      });
      return;
    }

    const createdUsers = await User.insertMany(users);
    res.status(201).json({
      message: 'Users created successfully',
      users: createdUsers.map(user => ({ email: user.email })),
    });
    return;
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: (error instanceof Error && error.message) || error });
    return;
  }
};

export const insertOne: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: 'User added successfully', user: { email: user.email } });
    return;
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: (err instanceof Error && err.message) || err });
    return;
  }
};

export const deleteOne: RequestHandler = async (req, res) => {
  try {
    const { email } = req.body;
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      res.status(400).json({ message: 'User not found' });
      return;
    }

    res.status(201).json({
      message: 'User deleted successfully',
      deletedUser: { email: deletedUser.email },
    });
    return;
  } catch (err) {
    res.status(400).json({
      message: 'Bad request',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};

export const updateOne: RequestHandler = async (req, res) => {
  try {
    const { email, updates } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: updates },
      { new: true },
    ).select('-password');

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
    return;
  } catch (err) {
    res.status(400).json({
      message: 'Update failed',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};

export const updateMany: RequestHandler = async (req, res) => {
  try {
    const { filter, updates } = req.body;

    const result = await User.updateMany(
      filter,
      { $set: updates },
    );

    res.status(200).json({
      message: 'Users updated successfully, property of dmytro riabtsun',
      modifiedCount: result.modifiedCount,
    });
    return;
  } catch (err) {
    res.status(400).json({
      message: 'Error during update',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};

export const replaceOne: RequestHandler = async (req, res) => {
  try {
    const { email, newData } = req.body;

    const replacedUser = await User.findOneAndReplace(
      { email },
      newData,
      { new: true },
    ).select('-password');

    if (!replacedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({
      message: 'User updated successfully',
      user: replacedUser,
    });
    return;
  } catch (err) {
    res.status(400).json({
      message: 'Error during replacement',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};

export const findUsersWithProjection: RequestHandler = async (req, res) => {
  try {
    const query = {};
    const projection = { email: 1, _id: 0 };

    const usersList = await User.find(query, projection);

    res.status(200).json({
      message: 'Users list created successfully',
      usersList: usersList,
    });
    return;
  } catch (err) {
    res.status(400).json({
      message: 'Error during projection',
      error: (err instanceof Error && err.message) || err,
    });
    return;
  }
};
