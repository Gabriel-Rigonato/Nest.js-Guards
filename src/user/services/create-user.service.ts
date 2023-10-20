import { Inject, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { PROFILE } from '@prisma/client';

import { CreateUserDTO } from '../dtos/create-user-dto';
import { UserEntity } from 'src/core/entities/user.entity';
import { ICreateUserService } from '../interfaces/services/icreate-user.service';
import { IUserRepository, USER_REPOSITORY_INTERFACE } from '../interfaces/repositories/iuser-repository';
import { CREATE_ACCESS_SERVICE_INTERFACE, ICreateAccessService } from 'src/access/interfaces/services/icreate-access.service';
import { access } from 'fs';

interface IRequest {
  name: string;
  email: string;
  password: string;
  profile?: PROFILE;
}

@Injectable()
export default class CreateUserService implements ICreateUserService {

  constructor(
    @Inject(CREATE_ACCESS_SERVICE_INTERFACE) private readonly iCreateAccessService: ICreateAccessService,
    @Inject(USER_REPOSITORY_INTERFACE) private readonly iUserRepository: IUserRepository) { }

  async create(createUserDTO: CreateUserDTO): Promise<UserEntity> {

    const hashedPassword = await bcrypt.hashSync(createUserDTO.password, 10);

    const data = {
      ...new UserEntity(),
      name: createUserDTO.name,
      email: createUserDTO.email,
      password: hashedPassword,
      profile: createUserDTO.profile,
    }

    try {
      const user = await this.iUserRepository.create(data);

      createUserDTO.access.map(async (access) => {
        await this.iCreateAccessService.create(access, user.id);
      })

      return user;
    } catch (err) {
      console.log(err)
    }
  }
}
