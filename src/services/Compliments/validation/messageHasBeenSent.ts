import { BadRequest } from '../../../custom/errors';

export function messageHasBeenSent(message: string): void {
  if (!message) {
    throw new BadRequest('Message is obligatory');
  }
}
