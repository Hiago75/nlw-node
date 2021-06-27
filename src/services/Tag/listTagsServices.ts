import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../../repositories';
import { classToPlain } from 'class-transformer';
import { ITag } from '../../interfaces';

export class ListTagsService {
  //Call the search and return the list
  async execute(): Promise<Record<string, string>> {
    const tags = await this.searchTags();

    return classToPlain(tags);
  }

  //Search for the tags
  async searchTags(): Promise<ITag[]> {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tags = await tagsRepositories.find();

    return tags;
  }
}
