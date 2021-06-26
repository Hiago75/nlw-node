import { getCustomRepository } from 'typeorm';

import { Compliment } from '../../entities/Compliment';
import { ComplimentsRepositories } from '../../repositories';

export class ListUserSentComplimentsService {
  async execute(user_id: string): Promise<Compliment[]> {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}
