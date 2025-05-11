import express from 'express';
import * as userController from './users.controller';
import * as usersMiddleware from './users.middleware';

const router = express.Router();

// router.get('/', userController.listUsers);
// router.get('/render', userController.renderUsers);
// router.get('/render/:id', userController.renderUserId);

router.get('/register', (_req, res) => {
  return res.render('register');
});
router.get('/login', (_req, res) => {
  return res.render('login');
});
router.post(
  '/register',
  [usersMiddleware.validateToken],
  userController.register
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

export default router;
