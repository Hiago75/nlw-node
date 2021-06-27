import isEmail from 'validator/lib/isEmail';
import { BadRequest } from '../../../custom/errors';

export function emailIsValid(email: string): void {
  if (!isEmail(email)) {
    throw new BadRequest('Invalid E-mail');
  }
}
