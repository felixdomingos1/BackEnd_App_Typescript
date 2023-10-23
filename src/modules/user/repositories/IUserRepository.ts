import { User } from '@prisma/client';

interface ICreateUserDTO {
  email: string;
  name: string;
  passwordHash: string;
}

interface ICreateUserUseCaseDTO {
  email: string;
  name: string;
  password: string;
}

interface IUserRepository {
  create({
    name,
    email,
    passwordHash,
  }: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
}

export { IUserRepository, ICreateUserDTO, ICreateUserUseCaseDTO };