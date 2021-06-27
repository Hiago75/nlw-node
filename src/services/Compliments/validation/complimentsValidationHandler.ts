import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../../../repositories';
import {
  userReceiverExists,
  senderEqualsToReceiver,
  userReceiverHasBeenSent,
  messageHasBeenSent,
  tagIdHasBeenSent,
} from './';

export async function complimentsValidationHandler(
  tag_id: string,
  sender: string,
  receiver: string,
  message: string,
): Promise<void> {
  const usersRepositories = getCustomRepository(UserRepositories);

  tagIdHasBeenSent(tag_id);
  messageHasBeenSent(message);
  userReceiverHasBeenSent(receiver);
  userReceiverExists(usersRepositories, receiver);
  senderEqualsToReceiver(sender, receiver);
}
