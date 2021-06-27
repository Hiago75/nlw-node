import { BadRequest } from '../../../custom/errors';
import { UserRepositories } from '../../../repositories';

export async function emailAlreadyExists(
  usersRepositories: UserRepositories,
  email: string,
): Promise<void> {
  const userAlreadyExists = await usersRepositories.findOne({
    email,
  });

  if (userAlreadyExists) {
    throw new BadRequest('Email already exists');
  }
}
