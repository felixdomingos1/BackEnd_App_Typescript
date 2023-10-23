import { UserRepository } from "../../repositories/implements/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createuser = new CreateUserController(createUserUseCase);

export { createuser };
