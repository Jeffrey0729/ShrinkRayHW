import argon2 from 'argon2';
import { Request, Response } from 'express';
import { getUserByUsername, addNewUser } from '../models/UserModel';
import { parseDatabaseError } from '../utils/db-utils';

async function registerUser(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body as AuthRequest;

  // Make sure to check if the user with the given username exists before attempting to add the account
  if (!(await getUserByUsername(username))) {
    res.sendStatus(404); // Username Not Found
    return;
  }

  // Make sure to hash the password before adding it to the database
  const passwordHash = await argon2.hash(password);

  // Wrap the call to `addNewUser` in a try/catch like in the sample code
  try {
    const newUser = await addNewUser(username, passwordHash);
    console.log(newUser);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

export { registerUser, getUserByUsername };
