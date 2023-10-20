import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { AccessModule } from 'src/access/access.module';
import { AuthController } from './controllers/auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import AuthService from './services/auth.service';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    PrismaModule,
    AccessModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '24h' },
    }),

    PassportModule
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
