import { Request, Response } from 'express';
import { findRequestUserId } from '../../helpers/findRequestUserId';
import { ICompliment } from '../../interfaces';
import { ListUserReceivedComplimentsService } from '../../services';

export class ListUserReceivedComplimentsController {
  async handle(request: Request, response: Response): Promise<Response<ICompliment[]>> {
    const userReceivedCompliments = await this.searchUserReceivedCompliments(request);

    return response.json(userReceivedCompliments);
  }

  async searchUserReceivedCompliments(request: Request): Promise<ICompliment[]> {
    const { user_id } = findRequestUserId(request);
    const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();

    const compliments = await listUserReceivedComplimentsService.execute(user_id);

    return compliments;
  }
}
