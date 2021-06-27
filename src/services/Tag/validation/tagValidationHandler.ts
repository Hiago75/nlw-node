import { tagAlreadyExists } from './tagAlreadyExistsValidate';
import { nameHasBeenSent } from './nameHasBeenSent';
import { TagsRepositories } from '../../../repositories';

export async function tagValidationHandler(
  tagsRepositories: TagsRepositories,
  name: string,
): Promise<void> {
  nameHasBeenSent(name);
  await tagAlreadyExists(name, tagsRepositories);
}
