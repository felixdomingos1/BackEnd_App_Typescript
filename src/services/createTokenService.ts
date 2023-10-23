import jwt from "jsonwebtoken";
import auth from "../config/auth";

const createTokenService = (user_id: number): string => {
  const token = jwt.sign(
    {
      user_id,
    },
    auth.key,
    { expiresIn: auth.expiresIn }
  );

  return token;
};

export { createTokenService };
