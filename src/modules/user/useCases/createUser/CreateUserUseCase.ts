import {
  IUserRepository,
  ICreateUserUseCaseDTO,
} from "../../repositories/IUserRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { createTokenService } from "../../../../services/createTokenService";

interface ICreateUserResponse {
  token: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  picturePath: string,
  location: string,
  occupation: string,
  viewedProfile: number,
  impressions : number,
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    email,
    firstName,
    lastName,
    password,
    picturePath,
    location,
    occupation,
    viewedProfile,
    impressions
  }: ICreateUserUseCaseDTO): Promise<ICreateUserResponse> {
    const email_existe = await this.userRepository.findByEmail(email);

    if (email_existe) throw new AppError("Contacto não autorizado!", 400);

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      email,
      firstName,
      lastName,
      picturePath,
      location,
      occupation,
      viewedProfile : Math.floor(Math.random() * 10000),
      impressions : Math.floor(Math.random() * 10000),
      passwordHash
    });

    const token = createTokenService(user.id);

    return {
      token,
      lastName,
      picturePath,
      location,
      occupation,
      viewedProfile,
      impressions,
      firstName: user.firstName,
      email: user.email,
      password
    };
  }
}

export { CreateUserUseCase };
