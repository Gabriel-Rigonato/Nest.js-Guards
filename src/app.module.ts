import { Module } from '@nestjs/common';
// import { AppController } from './user/controllers/user.controller';
import CreateService from './user/services/create-user.service';
import { PrismaModule } from './prisma/prisma.module';
import LoginService from './auth/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './core/strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './core/strategies/jwt.strategy';
import { UserModule } from './user/user.module';
import { AccessModule } from './access/access.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AccessModule,
    AuthModule,
  ],
  // controllers: [AppController],

  providers: [CreateService,
    LoginService,
    LocalStrategy,
    JwtStrategy],
})
export class AppModule { }
