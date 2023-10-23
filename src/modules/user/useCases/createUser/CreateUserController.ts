import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import esquema from "../../../../schemas/createUser";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    if (
      !(await esquema.isValid({
        name,
        email,
        password,
      }))
    )
      throw new Error("Dados inválidos!");

    const user = await this.createUserUseCase.execute({
      name,
      email,
      password
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
