import { Request, Response } from "express";
import * as Yup from "yup";
import { CreateSessionUseCase } from "./CreateSessionUseCase";
import { AppError } from "../../../../errors/AppError";

class CreateSessionController {
  constructor(private createSessionUseCase: CreateSessionUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const esquema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    const { email, password } = req.body;

    if (
      !(await esquema.isValid({
        email,
        password,
      }))
    ) {
      throw new AppError("Erro na validação. Verifique os dados!", 400);
    }

    const session = await this.createSessionUseCase.execute(email, password);

    return res.status(200).json(session);
  }
}

export { CreateSessionController };
