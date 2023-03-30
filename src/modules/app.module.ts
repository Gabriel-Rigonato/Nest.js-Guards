import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import CreateService from '../services/create.service';
import { PrismaModule } from '../prisma/prisma.module';
import LoginService from '../auth/login.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from '../auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule
  ],
  controllers: [AppController],

  providers: [CreateService,
    LoginService,
    LocalStrategy,
    JwtStrategy],
})
export class AppModule { }
