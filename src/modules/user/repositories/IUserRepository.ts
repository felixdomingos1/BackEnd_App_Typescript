import { User } from '@prisma/client';

interface ICreateUserDTO {
  userName:string, 
  userSirName:string,
  userType:string,
  email: string;
  passwordHash: string;
}

interface ICreateUserUseCaseDTO {
  userName:string, 
  userSirName:string,
  userType:string,
  email: string;
  password: string;
}

// interface IGetUserUseCaseDTO {
//   id:string
// }
// interface IGetUserDTO {
//   id:string
// }

interface IUserRepository {
  create({
    userName, 
    userSirName,
    userType,
    email,
    passwordHash,
  }: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
}

export { IUserRepository, ICreateUserDTO, ICreateUserUseCaseDTO };