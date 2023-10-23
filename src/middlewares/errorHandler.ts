import { NextFunction, Response, Request } from "express";
import { AppError } from "../errors/AppError";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      error: err.message,
      status: err.status,
    });
  }

  return res.status(500).json({
    message: err.message,
    status: 500,
  });
}

export { errorHandler };
