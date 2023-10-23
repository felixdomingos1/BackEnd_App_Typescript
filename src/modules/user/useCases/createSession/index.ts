import { ArtisteRepository } from "../../repositories/implements/UserRepository";
import { CreateSessionController } from "./CreateSessionController";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

const artisteRepository = new ArtisteRepository();
const createSessionUseCase = new CreateSessionUseCase(artisteRepository);
const createSession = new CreateSessionController(createSessionUseCase);

export { createSession };
