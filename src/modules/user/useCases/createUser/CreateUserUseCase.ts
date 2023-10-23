import {
  IUserRepository,
  ICreateUserUseCaseDTO,
} from "../../repositories/IUserRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { createTokenService } from "../../../../services/createTokenService";

interface ICreateUserResponse {
  token: string;
  name: string;
  email: string;
}
class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
  }: ICreateUserUseCaseDTO): Promise<ICreateUserResponse> {
    const email_existe = await this.userRepository.findByEmail(email);

    if (!email_existe) throw new AppError("Contacto não autorizado!", 400);

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      passwordHash
    });

    const token = createTokenService(user.id);

    return {
      token,
      name: user.name,
      email: user.email,
    };
  }
}

export { CreateUserUseCase };
