import express from 'express';
import { listUsers, renderUsers, renderUserId } from './users.controller';

const router = express.Router();

router.get('/', listUsers);
router.get('/render', renderUsers);
router.get('/render/:id', renderUserId);

export default router;
