import { Router } from "express";
import { createuser } from "../modules/user/useCases/createUser";
import { createSession } from "../modules/user/useCases/createSession";

const userRouter = Router();

userRouter.post(
  "/signup",
  (req, res) => {
    return createuser.handle(req, res);
  }
);

userRouter.post("/signin", (req, res) => {
  return createSession.handle(req, res);
});

export { userRouter };
