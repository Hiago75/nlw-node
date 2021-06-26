import { Request, Response } from 'express';
import { findRequestBodyItems } from '../../helpers/findRequestBodyItems';
import { ITag } from '../../interfaces';
import { CreateTagService } from '../../services';

export class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const tag = await this.createTag(request);

    return response.json(tag);
  }

  async createTag(request: Request): Promise<ITag> {
    const { name } = findRequestBodyItems(request, ['name']);
    const createTagService = new CreateTagService();
    const tag = await createTagService.execute(name);

    return tag;
  }
}
