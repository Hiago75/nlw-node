import { Forbidden } from '../../../custom/errors';
import { IUser } from '../../../interfaces';

export async function validateUser(user: IUser | undefined): Promise<IUser> {
  if (!user) {
    throw new Forbidden('Email/Password incorrect');
  } else if (typeof user === undefined) {
    throw new Forbidden('Email/Password incorrect');
  }

  return user;
}
