import { BadRequest } from '../../../custom/errors';

export function userReceiverHasBeenSent(user_receiver: string): void {
  if (!user_receiver) {
    throw new BadRequest('Receiver is obligatory');
  }
}
