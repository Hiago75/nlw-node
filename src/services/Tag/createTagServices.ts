import { getCustomRepository } from 'typeorm';
import { ITag } from '../../interfaces';
import { TagsRepositories } from '../../repositories/';
import { tagValidationHandler } from './validation';

export class CreateTagService {
  //Start Tag creation process
  async execute(name: string): Promise<ITag> {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tag = await this.createTag(tagsRepositories, name);

    await this.saveTagOnDb(tagsRepositories, tag);

    return tag;
  }

  //Create tag if everything is fine
  async createTag(tagsRepositories: TagsRepositories, name: string): Promise<ITag> {
    //Validate everything
    await tagValidationHandler(tagsRepositories, name);

    //Create the tag reference using the repository
    const tag = tagsRepositories.create({
      name,
    });

    return tag;
  }

  //Save tag on DB
  async saveTagOnDb(tagRepositories: TagsRepositories, tag: ITag): Promise<void> {
    await tagRepositories.save(tag);
  }
}
