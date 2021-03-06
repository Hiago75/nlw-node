import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepositories } from '../repositories';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | void> {
  const { user_id } = request;
  const usersRepositories = getCustomRepository(UserRepositories);
  const { admin } = (await usersRepositories.findOne(user_id)) as User;

  if (admin) {
    return next();
  }

  return response.status(401).end();
}
