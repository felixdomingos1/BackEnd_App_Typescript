import { User } from '@prisma/client';

interface ICreateUserDTO {
  firstName : string, 
  lastName: string,
  picturePath : string,
  location : string,
  occupation : string,
  viewedProfile : number,
  impressions : number,
  email : string,
  passwordHash : string,
}

interface ICreateUserUseCaseDTO {
  firstName : string, 
  lastName: string,
  picturePath : string,
  location : string,
  occupation : string,
  viewedProfile : number,
  impressions : number,
  email : string,
  password : string
}
interface IUserRepository {
  create({
    firstName,
    lastName,
    picturePath,
    location,
    occupation,
    viewedProfile,
    impressions,
    email,
    passwordHash,
  }: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
}

export { IUserRepository, ICreateUserDTO, ICreateUserUseCaseDTO };