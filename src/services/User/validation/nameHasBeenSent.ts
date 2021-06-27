import { BadRequest } from '../../../custom/errors';

export function nameHasBeenSent(name: string): void {
  if (!name) {
    throw new BadRequest('Name is obligatory');
  }
}
