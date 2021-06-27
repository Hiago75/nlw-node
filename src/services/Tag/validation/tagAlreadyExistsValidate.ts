import { BadRequest } from '../../../custom/errors';
import { TagsRepositories } from '../../../repositories';

export async function tagAlreadyExists(
  name: string,
  tagsRepositories: TagsRepositories,
): Promise<void> {
  const tagAlreadyExists = await tagsRepositories.findOne({
    name,
  });

  if (tagAlreadyExists) {
    throw new BadRequest('Tag already exists');
  }
}
