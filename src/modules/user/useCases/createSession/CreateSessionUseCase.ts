import { createTokenService } from "../../../../services/createTokenService";
import { IUserRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";

interface Session {
  token: string;
  name: string;
  email: string;
}

class CreateSessionUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, password: string): Promise<Session> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppError("Email ou password inválido!", 401);

    const passwordValid = await compare(password, user.passwordHash);

    if (!passwordValid) throw new AppError("Email ou password inválida!", 401);

    const token = createTokenService(user.id);

    return {
      token,
      name: user.name,
      email: user.email
    };
  }
}

export { CreateSessionUseCase };
