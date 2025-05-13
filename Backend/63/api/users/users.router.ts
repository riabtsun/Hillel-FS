import express from 'express';
import * as usersController from './users.controller';
import passport from 'passport';

const router = express.Router();

router.post('/register', usersController.register);
router.post('/login', passport.authenticate('local'), usersController.login);

router.get('/profile', usersController.getUserInfo);
router.get('/logout', usersController.logout);

export default router;
