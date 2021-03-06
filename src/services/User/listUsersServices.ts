import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';

import { UserRepositories } from '../../repositories';
import { IUser } from '../../interfaces/IUser';

export class ListUsersService {
  //starts process and return an adapted list of users
  async execute(): Promise<Record<string, string>> {
    const users = await this.searchUsers();

    return classToPlain(users);
  }

  //Search users on db and return a list with this users
  async searchUsers(): Promise<IUser[]> {
    const userRepositories = getCustomRepository(UserRepositories);
    const users = await userRepositories.find();

    return users;
  }
}
