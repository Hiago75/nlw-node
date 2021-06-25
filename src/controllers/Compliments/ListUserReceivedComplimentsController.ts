import { Request, Response } from 'express';
import { Compliment } from '../../entities/Compliment';
import { ListUserReceivedComplimentsService } from '../../services/Compliments/ListUserReceivedComplimentsService';

export class ListUserReceivedComplimentsController {
  async handle(request: Request, response: Response): Promise<Response<Compliment[]>> {
    const { user_id } = request;
    const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();
    const compliments = await listUserReceivedComplimentsService.execute(user_id);

    const json = response.json(compliments);
    return json;
  }
}
