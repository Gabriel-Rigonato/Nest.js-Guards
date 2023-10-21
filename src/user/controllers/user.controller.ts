import { Body, Controller, Get, Put, Param, Post, Query, Res, UseGuards, Inject, Delete } from '@nestjs/common';
import CreateService from '../services/create-user.service';

import { AuthGuard } from '../../core/guards/guardian.service';
import { JwtAuthGuard } from '../../core/guards/jwt-auth.guard';
import { CreateUserDTO } from '../dtos/create-user-dto';
import { CREATE_USER_SERVICE_INTERFACE, ICreateUserService } from '../interfaces/services/icreate-user.service';
import { AccessGuard } from 'src/core/guards/guardian-access.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject(CREATE_USER_SERVICE_INTERFACE)
    private readonly iCreateUserService: ICreateUserService
  ) { }
  @Post('/')
  // @UseGuards(AccessGuard)
  async create(@Body() createUserDTO: CreateUserDTO): Promise<any> {

    const user = await this.iCreateUserService.create(createUserDTO);

    return user;
  }


  @Get('/')
  @UseGuards(AccessGuard)
  async list(): Promise<void> {

    return console.log('Usuário conectado')
  }

  @Get('/:uuid')
  @UseGuards(AccessGuard)
  async teste(): Promise<void> {

    return console.log('Usuário conectado')
  }

  @Put('/')
  @UseGuards(AccessGuard)
  async update(): Promise<void> {

    return console.log('Usuário administrador conectado.')
  }

  @Delete('/')
  @UseGuards(AccessGuard)
  async delete(): Promise<void> {

    return console.log('Usuário administrador conectado.')
  }
}
