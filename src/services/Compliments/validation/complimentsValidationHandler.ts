import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../../../repositories';
import { userReceiverExists } from './';
import { senderEqualsToReceiver } from './senderEqualsToReceiverValidate';

export async function complimentsValidationHandler(
  sender: string,
  receiver: string,
): Promise<void> {
  const usersRepositories = getCustomRepository(UserRepositories);

  userReceiverExists(usersRepositories, receiver);
  senderEqualsToReceiver(sender, receiver);
}
