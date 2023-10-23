import { UserRepository } from "../../repositories/implements/UserRepository";
import { CreateSessionController } from "./CreateSessionController";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

const userRepository = new UserRepository();
const createSessionUseCase = new CreateSessionUseCase(userRepository);
const createSession = new CreateSessionController(createSessionUseCase);

export { createSession };
