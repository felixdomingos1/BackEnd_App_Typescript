import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import esquema from "../../../../schemas/createUser";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      email,
      firstName,
      lastName,
      passwordHash,
      picturePath,
      location,
      occupation,
      viewedProfile,
      impressions
    } = req.body;

    if (
      !(await esquema.isValid({ 
        email,
        firstName,
        lastName,
        passwordHash,
        picturePath,
        location,
        occupation,
        viewedProfile,
        impressions
      }))
    )
    throw new Error("Dados inválidos!");

    const user = await this.createUserUseCase.execute({
      email,
      firstName,
      lastName,
      passwordHash,
      picturePath,
      location,
      occupation,
      viewedProfile,
      impressions
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
