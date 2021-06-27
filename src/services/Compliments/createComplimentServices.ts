import { getCustomRepository } from 'typeorm';

import { ICompliment } from '../../interfaces';
import { ComplimentsRepositories } from '../../repositories';

import { complimentsValidationHandler } from './validation';

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export class CreateComplimentService {
  async execute({
    tag_id,
    message,
    user_receiver,
    user_sender,
  }: IComplimentRequest): Promise<ICompliment> {
    const compliment = this.createCompliment({ tag_id, message, user_receiver, user_sender });

    return compliment;
  }

  //Verifies is the user that will receive the compliment exists

  async createCompliment({
    tag_id,
    message,
    user_receiver,
    user_sender,
  }: IComplimentRequest): Promise<ICompliment> {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    await complimentsValidationHandler(user_sender, user_receiver);

    const compliment = complimentRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentRepositories.save(compliment);

    return compliment;
  }
}
