import { getCustomRepository } from 'typeorm';
import { Tag } from '../../entities/Tag';
import { TagsRepositories } from '../../repositories/TagsRepositories';
import { classToPlain } from 'class-transformer';

interface TagObject {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  nameCustom: string;
}

export class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}
