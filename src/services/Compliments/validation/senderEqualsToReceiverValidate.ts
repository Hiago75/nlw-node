import { BadRequest } from '../../../custom/errors';

export function senderEqualsToReceiver(sender: string, receiver: string): void {
  if (sender === receiver) {
    throw new BadRequest("An user can't compliment her/him own self");
  }
}
