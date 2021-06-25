import { getCustomRepository } from 'typeorm';
import { BadRequest } from '../../custom/errors/BadRequest';
import { Compliment } from '../../entities/Compliment';
import { ComplimentsRepositories } from '../../repositories/ComplimentsRepositories';
import { UserRepositories } from '../../repositories/UserRepositories';

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
  }: IComplimentRequest): Promise<Compliment> {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UserRepositories);

    if (user_sender === user_receiver) {
      throw new BadRequest("An user can't compliment her/him own self");
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new BadRequest("User receiver doesn't exists!");
    }

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
