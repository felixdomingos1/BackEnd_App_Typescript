import { UserRepository } from "modules/user/repositories/implements/UserRepository";
import { GetUserUseCase } from "./GetUserUseCase";
import { GetUserController } from "./GetUserController";

const userRepository = new UserRepository();
const getUserUseCase = new GetUserUseCase(userRepository);
const getUser = new GetUserController(getUserUseCase);

export { getUser };