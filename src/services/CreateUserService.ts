import { getCustomRepository } from 'typeorm'
import { UserRepositories } from "../repositories/UserRepositories";
import isEmail from 'validator/lib/isEmail'

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService{
  async execute({name, email, admin}: IUserRequest){
    const usersRepository = getCustomRepository(UserRepositories)

    //Verifies if e-mail has been sent
    if(!email){
      throw new Error("E-mail is obligatory")
    }

    //Verifies if e-mail is valid
    if(!isEmail(email)){
      throw new Error("Invalid E-mail")
    }

    //Check if the e-mail sent by the user already exists on our DB
    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if(userAlreadyExists) {
      throw new Error('User already exists');
    }

    //Create the user reference using the repository
    const user = usersRepository.create({
      name,
      email,
      admin
    })

    //Save the user on DB
    await usersRepository.save(user);

    return user
  }
}

