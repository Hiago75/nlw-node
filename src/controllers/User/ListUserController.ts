import { Request, Response } from 'express';
import { ListUsersService } from '../../services';

export class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.searchUser();

    return response.json(users);
  }

  async searchUser(): Promise<Record<string, string>> {
    const listUsersService = new ListUsersService();
    const users = await listUsersService.execute();

    return users;
  }
}
