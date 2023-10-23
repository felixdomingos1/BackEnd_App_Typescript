import { Router } from "express";
import { userRouter } from "./user.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "IT's OK!" });
});

routes.use("/user", userRouter);

export { routes };
