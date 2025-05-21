import express, { RequestHandler } from 'express';
import * as usersController from './users.controller';
import passport from 'passport';

const router = express.Router();

router.post('/register', usersController.register);
router.post(
  '/login',
  passport.authenticate('local'),
  usersController.login as RequestHandler,
);
router.post('/insert-many', usersController.insertManyUsers);
router.post('/insert-one', usersController.insertOne);

router.delete('/delete-one', usersController.deleteOne);
router.delete('/delete-many', usersController.deleteOne);

router.patch('/update-one', usersController.updateOne);
router.patch('/update-many', usersController.updateMany);
router.put('/replace-one', usersController.replaceOne);

router.get('/userslist', usersController.getAllUsers);
router.get('/profile', usersController.getUserInfo);
router.get('/logout', usersController.logout);
router.get('/projection', usersController.findUsersWithProjection);

export default router;