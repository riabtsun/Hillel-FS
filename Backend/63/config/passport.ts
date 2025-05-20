import { PassportStatic, DoneCallback } from 'passport';

const LocalStrategy = require('passport-local').Strategy;
import { User } from '../api/users/user.model';

export default (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      async (email: string, password: string, done: DoneCallback) => {
        try {
          const user = await User.findOne({ email });

          if (!user) {
            console.log('User not found');
            return done(null, false);
          }
          const isMatch = await user.comparePassword(password);
          if (!isMatch) {
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

  passport.deserializeUser(async (email: string, done: DoneCallback) => {
    const user = await User.findOne({ email });
    done(null, user || false);
  });
};
