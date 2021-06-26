import { Request, Response } from 'express';
import { CreateTagService } from '../../services/Tag/CreateTagService';

export class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createTagService = new CreateTagService();

    const user = await createTagService.execute(name);

    return response.json(user);
  }
}