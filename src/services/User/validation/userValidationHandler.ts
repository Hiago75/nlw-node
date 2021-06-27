import { UserRepositories } from '../../../repositories';
import { emailIsValid, emailHasBeenSent, emailAlreadyExists } from './';

export async function userValidationHandler(
  userRepositories: UserRepositories,
  email: string,
): Promise<void> {
  emailHasBeenSent(email);
  emailIsValid(email);
  await emailAlreadyExists(userRepositories, email);
}
