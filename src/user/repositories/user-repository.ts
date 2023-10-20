import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserRepository } from '../interfaces/repositories/iuser-repository';

@Injectable()
export default class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(userEntity: UserEntity): Promise<UserEntity> {
    const user = await this.prisma.user.create({
      data: {
        ...userEntity
      }
    });
    return user;
  }
}
