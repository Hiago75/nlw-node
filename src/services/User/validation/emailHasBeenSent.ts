import { BadRequest } from '../../../custom/errors';

export function emailHasBeenSent(email: string): void {
  if (!email) {
    throw new BadRequest('E-mail is obligatory');
  }
}
