import express from 'express';
import usersController from './users.controller';
import users from '../../mock/MOCK_DATA';

const router = express.Router();

router.get('/', usersController.listUsers);
router.get('/render', usersController.renderUsers);

export default router;
