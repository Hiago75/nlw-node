import { Response, Request } from 'express';
import { Tag } from '../../entities/Tag';
import { ListTagsService } from '../../services/Tag/ListTagsService';

export class ListTagsController {
  async handle(request: Request, response: Response): Promise<Response<Tag[]>> {
    const listTagsService = new ListTagsService();
    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}
