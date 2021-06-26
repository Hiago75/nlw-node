import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';

import { UserRepositories } from '../../repositories';
import { IUser } from '../../interfaces/IUser';

export class ListUsersService {
  execute(): Record<string, string> {
    const users = this.findUsers();

    return classToPlain(users);
  }

  async findUsers(): Promise<IUser[]> {
    const userRepositories = getCustomRepository(UserRepositories);
    const users = await userRepositories.find();

    return users;
  }
}
