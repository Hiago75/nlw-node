import { Request, Response } from 'express';
import { Compliment } from '../entities/Compliment';
import { CreateComplimentService } from '../services/CreateComplimentService';

export class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response<Compliment>> {
    const { tag_id, message, user_receiver, user_sender } = request.body;
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      message,
      user_receiver,
      user_sender,
    });

    return response.json(compliment);
  }
}
