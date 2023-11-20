/* eslint-disable consistent-return */
/* eslint-disable new-cap */
import * as argon2 from 'argon2';
import passport from 'passport';
import { PostgresDataSource } from 'server/data-source';
import { error } from 'winston';

import { PsUsers } from '../entity/mssql/pg.users';

const localStrategy = require('passport-local').Strategy;

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

PostgresDataSource.initialize();

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email: any, password: any, done: any): Promise<any> => {
      try {
        const user = await PostgresDataSource.getRepository(PsUsers).create({
          email,
          password
        });
        return done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email: string, password: string, done: any): Promise<any> => {
      try {
        const user: any = await PostgresDataSource.getRepository(
          PsUsers
        ).findOne({
          where: [{ email }]
        });
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await argon2.verify(user.password, password);

        if (!validate) {
          return done(null, false, { message: 'Wrong password' });
        }

        return done(null, user, { message: 'Login successfull' });
      } catch (e) {
        return done(e);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: 'top_secret',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    // eslint-disable-next-line func-names
    async (token: any, done: any): Promise<any> => {
      try {
        return done(null, token.user);
      } catch (e) {
        done(error);
      }
    }
  )
);
