import { Request, Response } from 'express';
import { Compliment } from '../../entities/Compliment';
import { ListUserSentComplimentsService } from '../../services/Compliments/ListUserSentComplimentsService';

export class ListUserSentComplimentsController {
  async handle(request: Request, response: Response): Promise<Response<Compliment[]>> {
    const { user_id } = request;
    const listUserSentComplimentsService = new ListUserSentComplimentsService();
    const compliments = await listUserSentComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}
