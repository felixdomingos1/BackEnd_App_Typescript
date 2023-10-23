import { Router } from "express";
import { createuser } from "../modules/user/useCases/createUser";
import { createSession } from "../modules/user/useCases/createSession";
import { getUser } from "../modules/user/useCases/getUser/Index";

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
userRouter.get("/members/:id", (req, res) => {
  return getUser.handle(req, res);
});

export { userRouter };
