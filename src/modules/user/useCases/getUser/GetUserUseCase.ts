import {
  IUserRepository
} from "../../repositories/IUserRepository";

class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id : number){
    if (!id) {
      const users = await this.userRepository
      users
    }
    const user_existe = await this.userRepository.findById(id);
    return user_existe
  }
}
export {
  GetUserUseCase
}