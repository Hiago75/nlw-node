import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../../repositories/UserRepositories';
import isEmail from 'validator/lib/isEmail';
import { User } from '../../entities/User';
import { genSaltSync, hash } from 'bcryptjs';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepositories);

    //Verifies if e-mail has been sent
    if (!email) {
      throw new Error('E-mail is obligatory');
    }

    //Verifies if e-mail is valid
    if (!isEmail(email)) {
      throw new Error('Invalid E-mail');
    }

    //Check if the e-mail sent by the user already exists on our DB
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, genSaltSync());

    //Create the user reference using the repository
    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    //Save the user on DB
    await usersRepository.save(user);

    return user;
  }
}
