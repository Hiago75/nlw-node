import { BadRequest } from '../../../custom/errors';
import { UserRepositories } from '../../../repositories';

export async function userReceiverExists(
  usersRepositories: UserRepositories,
  user_receiver: string,
): Promise<void> {
  const userReceiverExists = await usersRepositories.findOne(user_receiver);

  if (!userReceiverExists) {
    throw new BadRequest("User receiver doesn't exists!");
  }
}
