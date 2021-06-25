import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UserRepositories } from '../../repositories/UserRepositories';

interface IAuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  async execute({ email, password }: IAuthRequest): Promise<string> {
    const userRepositories = getCustomRepository(UserRepositories);
    const user = await userRepositories.findOne({
      email,
    });

    //Verifies if e-mail exists
    if (!user) {
      throw new Error('Email/Password incorrect');
    }

    //Verifies if password is correct
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Email/Password incorrect');
    }
    //Generate Token
    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user.id,
        expiresIn: process.env.JWT_EXPIRES_TIME,
      },
    );

    return token;
  }
}
