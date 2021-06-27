import { BadRequest } from '../../../custom/errors';

export function passwordHasBeenSent(password: string): void {
  if (!password) {
    throw new BadRequest('Password is obligatory');
  }
}
