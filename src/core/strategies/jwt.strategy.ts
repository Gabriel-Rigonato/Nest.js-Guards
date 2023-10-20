import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, ExecutionContext } from '@nestjs/common';
import { FETCH_ACCESS_SERVICE_INTERFACE, IFetchAccessService } from 'src/access/interfaces/services/ifetch-access.service';

import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(FETCH_ACCESS_SERVICE_INTERFACE)
    private readonly iFetchAccessService: IFetchAccessService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY,
    });
  }

  async validate(payload: any, context: ExecutionContext) {

    if (payload.isAdmin == false) {

      throw new Error('forbidden')
    }
    return { userId: payload.sub, username: payload.name, isAdmin: payload.isAdmin };
  }
}