import { getCustomRepository } from 'typeorm';
import { BadRequest } from '../../custom/errors';
import { Tag } from '../../entities/Tag';
import { TagsRepositories } from '../../repositories/';

export class CreateTagService {
  async execute(name: string): Promise<Tag> {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    //Verifies if the tag name has been sent
    if (!name) {
      throw new BadRequest('Name is obligatory.');
    }

    //Verifies if the tag name sent by the user already exists on DB
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new BadRequest('Tag already exists');
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
