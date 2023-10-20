import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthenticationDTO } from '../dtos/authentication.dto';
import AuthService from '../services/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('')
  async auth(@Body() authenticationDTO: AuthenticationDTO): Promise<any> {

    const { email, password } = authenticationDTO;

    const login = await this.authService.auth({ email, password });

    return login;
  }
}
