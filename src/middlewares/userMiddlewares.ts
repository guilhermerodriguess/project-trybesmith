import { NextFunction, Request, Response } from 'express';

import { CreateUser } from '../interfaces';

function validateUserName(username: string) {
  if (!username) {
    const message = '"username" is required';  
    return ({ status: 400, message });
  }
  
  if ((typeof username) !== 'string') {
    const message = '"username" must be a string';
    return ({ status: 422, message });
  }

  if (username.length < 3) {
    const message = '"username" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
}

function validateVocation(vocation: string) {
  if (!vocation) {
    const message = '"vocation" is required';  
    return ({ status: 400, message });
  }
  
  if ((typeof vocation) !== 'string') {
    const message = '"vocation" must be a string';
    return ({ status: 422, message });
  }

  if (vocation.length < 3) {
    const message = '"vocation" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
}

function validateLevel(level: number) {
  if (level === undefined) {
    const message = '"level" is required';  
    return ({ status: 400, message });
  }
  if ((typeof level) !== 'number') {
    const message = '"level" must be a number';
    return ({ status: 422, message });
  }
  if (level <= 0) {
    const message = '"level" must be greater than or equal to 1';
    return ({ status: 422, message });
  }

  return null;
}

function validatePassword(password: string) {
  if (!password) {
    const message = '"password" is required';  
    return ({ status: 400, message });
  }
  
  if ((typeof password) !== 'string') {
    const message = '"password" must be a string';
    return ({ status: 422, message });
  }

  if (password.length < 8) {
    const message = '"password" length must be at least 8 characters long';
    return ({ status: 422, message });
  }

  return null;
}

function response(status: number, message: string, res: Response) {
  return res.status(status).json({ message });
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, vocation, level, password } = req.body as CreateUser;

  const errorUserName = validateUserName(username);
  const errorVocation = validateVocation(vocation);
  const errorLevel = validateLevel(level);
  const errorPassword = validatePassword(password);

  if (errorUserName) return response(errorUserName.status, errorUserName.message, res);
  if (errorVocation) return response(errorVocation.status, errorVocation.message, res);
  if (errorLevel) return response(errorLevel.status, errorLevel.message, res);
  if (errorPassword) return response(errorPassword.status, errorPassword.message, res);

  next();
}