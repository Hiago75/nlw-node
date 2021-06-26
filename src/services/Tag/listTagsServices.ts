import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../../repositories';
import { classToPlain } from 'class-transformer';

export class ListTagsService {
  async execute(): Promise<Record<string, string>> {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}
