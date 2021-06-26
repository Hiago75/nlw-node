import { Request, Response } from 'express';
import { findRequestUserId } from '../../helpers/findRequestUserId';
import { ICompliment } from '../../interfaces';
import { ListUserSentComplimentsService } from '../../services';

export class ListUserSentComplimentsController {
  async handle(request: Request, response: Response): Promise<Response<ICompliment[]>> {
    const complimentsSentByUser = await this.searchComplimentsSentByUser(request);

    return response.json(complimentsSentByUser);
  }

  async searchComplimentsSentByUser(request: Request): Promise<ICompliment[]> {
    const { user_id } = findRequestUserId(request);
    const listUserSentComplimentsService = new ListUserSentComplimentsService();

    const complimentsSentByUser = await listUserSentComplimentsService.execute(user_id);

    return complimentsSentByUser;
  }
}
