import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import { UserRepositories } from '../../repositories';
import { IUser } from '../../interfaces';

import { validatePassword, validateUser } from './validation';

interface IAuthRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  //Start the token creation process
  async execute({ email, password }: IAuthRequest): Promise<string> {
    const token = await this.createToken(email, password);

    return token;
  }

  //Search user by e-mail
  async searchUser(userRepositories: UserRepositories, email: string): Promise<IUser> {
    const user = await userRepositories.findOne({
      email,
    });

    return validateUser(user);
  }

  //Create token if everything is fine. Returns the token
  async createToken(email: string, password: string): Promise<string> {
    const userRepositories = getCustomRepository(UserRepositories);

    const user = await this.searchUser(userRepositories, email);
    const userPassword = (await user).password;

    await validatePassword(password, userPassword);

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
