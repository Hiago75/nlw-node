import { getCustomRepository } from 'typeorm';

import { ICompliment } from '../../interfaces';
import { ComplimentsRepositories } from '../../repositories';

export class ListUserReceivedComplimentsService {
  //Start the process and return the list of compliments received by user
  async execute(user_id: string): Promise<ICompliment[]> {
    const compliments = this.searchUserReceivedCompliments(user_id);

    return compliments;
  }

  //Search user received compliments on DB based on user_id and returns the list containing this compliments
  async searchUserReceivedCompliments(user_id: string): Promise<ICompliment[]> {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_receiver: user_id,
      },
    });

    return compliments;
  }
}
