import { Request, Response } from 'express';

import { AuthUserService } from '../../services';
import { findRequestBodyItems } from '../../helpers/findRequestBodyItems';

export class AuthUserController {
  // Return the final Token as JSON
  async handle(_request: Request, response: Response): Promise<Response<string>> {
    const token = await this.createToken(_request);

    return response.json(token);
  }

  // Create JWT itself and return this Token
  async createToken(request: Request): Promise<string> {
    const { email, password } = findRequestBodyItems(request, ['email', 'password']);
    const authUserService = new AuthUserService();

    const token = await authUserService.execute({
      email,
      password,
    });

    return token;
  }
}
