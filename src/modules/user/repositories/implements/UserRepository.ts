import { User } from "@prisma/client"; 
import prismaClient from "../../../../prisma";
import { IUserRepository, ICreateUserDTO } from "../IUserRepository";

class UserRepository implements IUserRepository {
  async create({
    userName, 
    userSirName,
    userType,
    email,
    passwordHash,
  }: ICreateUserDTO): Promise<User> {
    const user = await prismaClient.user.create({
      data: { 
        userName, 
        userSirName,
        userType,
        email, 
        passwordHash 
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    return user;
  }
  async findById(id: number): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: { id },
    });
    return user;
  }
}

export { UserRepository };
