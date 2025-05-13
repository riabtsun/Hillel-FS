import { PassportStatic, DoneCallback } from 'passport';

const LocalStrategy = require('passport-local').Strategy;
import users from '../api/users/users.mock';

export default (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      (email: string, password: string | number, done: DoneCallback) => {
        try {
          const user = users.find((user) => user.email === email);

          if (!user || user.password !== password) {
            return done(null, false);
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user: any, done: DoneCallback) => {
    done(null, user.email);
  });

  passport.deserializeUser((email: string, done: DoneCallback) => {
    const user = users.find((user) => user.email === email);
    done(null, user || false);
  });
};
