import { genSaltSync, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

import { UserRepositories } from '../../repositories';
import { IUser } from '../../interfaces';

import { userValidationHandler } from './validation';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  //Start user creation process and return the user
  async execute({ name, email, admin = false, password }: IUserRequest): Promise<IUser> {
    const usersRepositories = getCustomRepository(UserRepositories);

    const user = await this.createUser(usersRepositories, { name, email, admin, password });
    await this.saveOnUserDB(usersRepositories, user);

    return user;
  }

  //Create password Hash using bcrypt and return the password hash
  async createPasswordHash(password: string): Promise<string> {
    const passwordHash = await hash(password, genSaltSync());

    return passwordHash;
  }

  //Create and return the user after verifying if everything is fine and return the user
  async createUser(
    usersRepositories: UserRepositories,
    { name, email, admin, password }: IUserRequest,
  ): Promise<IUser> {
    await userValidationHandler(usersRepositories, email);

    const passwordHash = await this.createPasswordHash(password);

    //Create the user reference using the repository
    const user = usersRepositories.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    return user;
  }

  //Save user on user DB
  async saveOnUserDB(usersRepositories: UserRepositories, user: IUser): Promise<void> {
    await usersRepositories.save(user);
  }
}
