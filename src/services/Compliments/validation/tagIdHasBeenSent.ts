import { BadRequest } from '../../../custom/errors';

export function tagIdHasBeenSent(tag_id: string): void {
  if (!tag_id) {
    throw new BadRequest('Tag is obligatory');
  }
}
