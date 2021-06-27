import { UserRepositories } from '../../../repositories';
import {
  emailIsValid,
  emailHasBeenSent,
  emailAlreadyExists,
  nameHasBeenSent,
  passwordHasBeenSent,
} from './';

export async function userValidationHandler(
  userRepositories: UserRepositories,
  name: string,
  email: string,
  password: string,
): Promise<void> {
  nameHasBeenSent(name);
  emailHasBeenSent(email);
  passwordHasBeenSent(password);
  emailIsValid(email);
  await emailAlreadyExists(userRepositories, email);
}
