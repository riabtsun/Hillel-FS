import express from 'express';
import * as userController from './users.controller';

const router = express.Router();

// router.get('/', userController.listUsers);
// router.get('/render', userController.renderUsers);
// router.get('/render/:id', userController.renderUserId);

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/register', (_req, res) => {
  return res.render('register');
});

export default router;
