import { Response, Request } from 'express';
import { ITag } from '../../interfaces';
import { ListTagsService } from '../../services';

export class ListTagsController {
  async handle(_request: Request, response: Response): Promise<Response<ITag[]>> {
    const tags = await this.searchTags();

    return response.json(tags);
  }

  makeListTagService(): ListTagsService {
    const listTagsService = new ListTagsService();

    return listTagsService;
  }

  async searchTags(): Promise<Record<string, string>> {
    const listTagsService = this.makeListTagService();
    const tags = await listTagsService.execute();

    return tags;
  }
}
