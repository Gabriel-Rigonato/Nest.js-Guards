import { Body, Controller, Get, Param, Post, Query, Res, UseGuards } from '@nestjs/common';
import CreateService from '../services/create-user.service';
import IRequest from './interface/interface.controller';
import LoginService from '../services/login.service';
import { AuthGuard } from '../guards/guardian.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly CreateService: CreateService,
    private readonly LoginService: LoginService) { }
  @Post('createUser')
  async createUser(@Body() IRequest: IRequest): Promise<Response> {


    const { name, email, password, isAdmin } = IRequest;

    const user = await this.CreateService.create({ name, email, password, isAdmin });

    return user;
  }

  @Post('login')
  async loginUser(@Body() IRequest: IRequest): Promise<any> {
    const { email, password } = IRequest;

    const login = await this.LoginService.login({ email, password });

    return login;
  }

  @Get('routeOPEN')
  @UseGuards(AuthGuard)
  async route(): Promise<void> {

    return console.log('Usuário conectado')
  }

  @Get('routeADMIN')
  @UseGuards(JwtAuthGuard)
  async router(): Promise<void> {

    return console.log('Usuário administrador conectado.')
  }
}
