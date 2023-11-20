/* eslint-disable @typescript-eslint/no-non-null-assertion */

import jwt from 'jsonwebtoken';

export const createToken = (username: string, tokenVersion: number) =>
  jwt.sign({ username, tokenVersion }, process.env.SECRET_ACCESS_TOKEN!, {
    expiresIn: '30s'
  });

export const refreshToken = (username: string, tokenVersion: number) =>
  jwt.sign({ username, tokenVersion }, process.env.SECRET_REFRESH_TOKEN!, {
    expiresIn: '1d'
  });

export const sendToken = (res: any, token: string) => {
  res.cookie(process.env.COOKIE_NAME!, token, {
    // secure: process.env.NODE_ENV !== 'development',
    // httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    expires: 600000
  });
};

export const clearToken = (res: any) => {
  res.clearCookie(process.env.COOKIE_NAME!, {
    // maxAge: 24 * 60 * 60 * 1000,
    // expires: dayjs().add(7, 'days').toDate(),
  });
};

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.SECRET_ACCESS_TOKEN!);
