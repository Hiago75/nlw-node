import { compare } from 'bcryptjs';
import { Forbidden } from '../../../custom/errors';

export async function validatePassword(password: string, userPassword: string): Promise<void> {
  if (!password) {
    throw new Forbidden('Email/Password incorrect');
  }

  const passwordMatch = await compare(password, userPassword);

  if (!passwordMatch) {
    throw new Forbidden('Email/Password incorrect');
  }
}
