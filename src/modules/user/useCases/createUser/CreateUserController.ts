import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import esquema from "../../../../schemas/createUser";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { 
      userName, 
      userSirName,
      userType, 
      email, 
      password 
    } = req.body;

    if (
      !(await esquema.isValid({
        userName, 
        userSirName,
        userType,
        email,
        password
      }))
    )
    throw new Error("Dados inválidos!");

    const user = await this.createUserUseCase.execute({
      userName, 
      userSirName,
      userType,
      email,
      password
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
