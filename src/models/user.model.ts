import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { CreateUser, IUser, Login } from '../interfaces';
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

const getUserByUsername = async (login: Login): Promise<IUser[]> => {
  const { username } = login;

  const query = 'SELECT * FROM Trybesmith.users WHERE users.username = ?';
  const values = [username];

  const [data] = await connection.execute<RowDataPacket[] & IUser[]>(query, values);

  return data || null;
};

getUserByUsername({
  username: 'string',
  password: 'string',
});

const userModel = { createUser, getUserByUsername };

export default userModel;