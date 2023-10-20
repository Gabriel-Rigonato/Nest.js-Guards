import { UserEntity } from "src/core/entities/user.entity";

export const USER_REPOSITORY_INTERFACE = 'USER_REPOSITORY_INTERFACE';

export interface IUserRepository {
   create: (userEntity: UserEntity) => Promise<UserEntity>;
}