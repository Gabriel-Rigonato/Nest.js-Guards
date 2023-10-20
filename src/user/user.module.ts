import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { USER_REPOSITORY_INTERFACE } from './interfaces/repositories/iuser-repository';
import UserRepository from './repositories/user-repository';
import { CREATE_USER_SERVICE_INTERFACE } from './interfaces/services/icreate-user.service';
import CreateUserService from './services/create-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccessModule } from 'src/access/access.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    PrismaModule,
    AccessModule,

    PassportModule
  ],
  controllers: [
    UserController
  ],

  providers: [
    { provide: USER_REPOSITORY_INTERFACE, useClass: UserRepository },

    { provide: CREATE_USER_SERVICE_INTERFACE, useClass: CreateUserService }
  ],

  exports: [
    USER_REPOSITORY_INTERFACE,

    CREATE_USER_SERVICE_INTERFACE
  ]
})
export class UserModule { }
