import { ResultSetHeader } from 'mysql2';
import { CreateUser, IUser } from '../interfaces';
import connection from './connection';

const createUser = async (user: CreateUser): Promise<IUser> => {
  const { username, vocation, password, level } = user;

  const query = `INSERT INTO Trybesmith.users 
    (username, vocation, password, level) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, password, level];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: IUser = { id, username, vocation, password, level };
  return newUser;
};

const userModel = { createUser };

export default userModel;