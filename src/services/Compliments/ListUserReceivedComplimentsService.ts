import { getCustomRepository } from 'typeorm';
import { Compliment } from '../../entities/Compliment';
import { ComplimentsRepositories } from '../../repositories/ComplimentsRepositories';

export class ListUserReceivedComplimentsService {
  async execute(user_id: string): Promise<Compliment[]> {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_receiver: user_id,
      },
    });

    return compliments;
  }
}
