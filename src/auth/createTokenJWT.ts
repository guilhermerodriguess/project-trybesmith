import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

const secret = 'secret';

require('dotenv/config');

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data: IUser) => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = (token: string) => jwt.verify(token, secret);

const createTokenJWT = { createToken, verifyToken };

export default createTokenJWT;