import { getCustomRepository } from 'typeorm';

import { ICompliment } from '../../interfaces';
import { ComplimentsRepositories } from '../../repositories';

export class ListUserSentComplimentsService {
  //Start the process and return the list of compliments sent by user
  async execute(user_id: string): Promise<ICompliment[]> {
    const compliments = this.searchUserSentCompliments(user_id);

    return compliments;
  }

  //Search compliments sent by user on DB based on user_id and returns the list containing this compliments
  async searchUserSentCompliments(user_id: string): Promise<ICompliment[]> {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}
