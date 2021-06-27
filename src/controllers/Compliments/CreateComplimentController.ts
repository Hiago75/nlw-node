import { Request, Response } from 'express';
import { findRequestBodyItems } from '../../helpers/findRequestBodyItems';
import { findRequestUserId } from '../../helpers/findRequestUserId';
import { ICompliment } from '../../interfaces';
import { CreateComplimentService } from '../../services';

export class CreateComplimentController {
  // Create and return the final compliment object as JSON
  async handle(request: Request, response: Response): Promise<Response<ICompliment>> {
    const compliment = await this.createCompliment(request);

    return response.json(compliment);
  }

  async createCompliment(request: Request): Promise<ICompliment> {
    const { tag_id, message, user_receiver } = findRequestBodyItems(request, [
      'tag_id',
      'message',
      'user_receiver',
    ]);
    const { user_id } = findRequestUserId(request);
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      message,
      user_receiver,
      user_sender: user_id,
    });

    return compliment;
  }
}
