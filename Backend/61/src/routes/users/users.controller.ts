import { Request, Response } from 'express';
import list from './users.service';
import usersData from '../../mock/MOCK_DATA';

async function listUsers(_req: Request, res: Response) {
  const users = await list();
  res.status(200).json(users);
}

async function renderUsers(_req: Request, res: Response) {
  try {
    const users = await list();
    return res.render('users', { usersList: usersData });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

export default { listUsers, renderUsers };
