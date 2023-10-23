import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}
  async handle(req:Request, res:Response){
    const { id } = req.params
    const user = await this.getUserUseCase.execute(Number(id));
    return res.status(201).json(user); 
  }
}
export {
   GetUserController
}