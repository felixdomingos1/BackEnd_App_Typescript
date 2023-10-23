import {
  UserRepository
} from "../../repositories/implements/UserRepository";

class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id:number){

    const user_existe = await this.userRepository.findById(id);
    
    if (user_existe) {
      return user_existe
    }
    const users = await this.userRepository
    return users
  }
}
export {
  GetUserUseCase
}