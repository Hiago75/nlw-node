import { Request, Response } from 'express';
import { findRequestBodyItems } from '../../helpers/findRequestBodyItems';
import { IUser } from '../../interfaces';
import { CreateUserService } from '../../services';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user = await this.createUser(request);

    return response.json(user);
  }

  makeCreateUserService() {
    const createUserService = new CreateUserService();

    return createUserService;
  }

  async createUser(request: Request): Promise<IUser> {
    const { name, email, admin, password } = findRequestBodyItems(request, [
      'name',
      'email',
      'admin',
      'password',
    ]);
    const createUserService = this.makeCreateUserService();
    const user = await createUserService.execute({ name, email, admin, password });

    return user;
  }
}
