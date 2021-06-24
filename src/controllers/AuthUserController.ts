import { Request, Response } from 'express';
import { AuthUserService } from '../services/AuthUserService';

export class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response<string>> {
    const { email, password } = request.body;
    const authUserService = new AuthUserService();
    const token = await authUserService.execute({
      email,
      password,
    });

    return response.json(token);
  }
}
