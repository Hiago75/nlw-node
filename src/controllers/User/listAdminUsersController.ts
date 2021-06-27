import { Request, Response } from 'express';
import { ListAdminUsersService } from '../../services';

export class ListAdminUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const adminUsers = await this.searchAdminUser();

    return response.json(adminUsers);
  }

  async searchAdminUser(): Promise<Record<string, string>> {
    const listAdminUsersService = new ListAdminUsersService();
    const adminUsers = await listAdminUsersService.execute();

    return adminUsers;
  }
}
