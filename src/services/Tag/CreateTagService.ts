import { getCustomRepository } from 'typeorm';
import { Tag } from '../../entities/Tag';
import { TagsRepositories } from '../../repositories/TagsRepositories';

export class CreateTagService {
  async execute(name: string): Promise<Tag> {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    //Verifies if the tag name has been sent
    if (!name) {
      throw new Error('Name is obligatory.');
    }

    //Verifies if the tag name sent by the user already exists on DB
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists');
    }

    //Create the tag reference using the repository
    const tag = tagsRepositories.create({
      name,
    });

    //Save the tag on DB
    await tagsRepositories.save(tag);

    return tag;
  }
}
