import { Request, Response } from 'express';
import list from './users.service';
import usersData from '../../mock/MOCK_DATA';

export const listUsers = async (_req: Request, res: Response) => {
  const users = await list();
  res.status(200).json(users);
};

export const renderUsers = async (_req: Request, res: Response) => {
  try {
    const users = await list();
    return res.render('users', { usersList: usersData });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const renderUserId = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = usersData.find((user) => user.id === Number(id));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    return res.render('users', { user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
