import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';

import { UserRepositories } from '../../repositories';
import { IUser } from '../../interfaces/IUser';

export class ListAdminUsersService {
  //starts process and return an adapted list of users
  async execute(): Promise<Record<string, string>> {
    const adminUsers = await this.searchUsers();

    return classToPlain(adminUsers);
  }

  //Search admin users on db and return a list with this users
  async searchUsers(): Promise<IUser[]> {
    const userRepositories = getCustomRepository(UserRepositories);
    const adminUsers = await userRepositories.find({
      where: {
        admin: true,
      },
    });

    return adminUsers;
  }
}
