import { UserEntity } from "src/core/entities/user.entity";
import { CreateUserDTO } from "src/user/dtos/create-user-dto";

export const CREATE_USER_SERVICE_INTERFACE = 'CREATE_USER_SERVICE_INTERFACE';

export interface ICreateUserService {

   create: (createUserDTO: CreateUserDTO) => Promise<UserEntity>;

}