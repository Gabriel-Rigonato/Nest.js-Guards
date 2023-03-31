import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import LoginService from './login.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private loginService: LoginService) {
    super({ email: 'email', password: 'password' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.loginService.login({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}