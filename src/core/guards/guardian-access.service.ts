import { Injectable, CanActivate, ExecutionContext, Param, Req, UnauthorizedException, Inject } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { FETCH_ACCESS_SERVICE_INTERFACE, IFetchAccessService } from 'src/access/interfaces/services/ifetch-access.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class AccessGuard implements CanActivate {
  constructor(
    @Inject(FETCH_ACCESS_SERVICE_INTERFACE)
    private readonly iFetchAccessService: IFetchAccessService,
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
    private reflector: Reflector) { }


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const route: RouteInfo = request.route;

    const payload = await this.jwtService.verifyAsync(
      token,
      {
        secret: process.env.JWT_KEY
      }
    );
    request['user'] = payload;
    const access = await this.iFetchAccessService.find(request['user'].sub, route.path);

    if (request.method === access.method) {
      if (access.isTrue === true) {
        return true
      } else {
        throw new UnauthorizedException();
      }
    }
    if (request.method === access.method) {
      if (access.isTrue === true) {
        return true
      } else {
        throw new UnauthorizedException();
      }
    }
    if (request.method === access.method) {
      if (access.isTrue === true) {
        return true
      } else {
        throw new UnauthorizedException();
      }
    }
    if (request.method === access.method) {
      if (access.isTrue === true) {
        return true
      } else {
        throw new UnauthorizedException();
      }
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

}


