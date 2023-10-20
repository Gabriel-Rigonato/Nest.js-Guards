import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';

import { ACCESS_REPOSITORY } from './interfaces/repositories/iaccess-repository';

import { AccessRepository } from './repositories/access-repository';
import { CREATE_ACCESS_SERVICE_INTERFACE } from './interfaces/services/icreate-access.service';
import { CreateAccessService } from './services/create-access.service';
import { FETCH_ACCESS_SERVICE_INTERFACE } from './interfaces/services/ifetch-access.service';
import { FetchAccessService } from './services/fetch-access.service';

@Module({
  imports: [
    PrismaModule
  ],
  exports: [
    ACCESS_REPOSITORY,
    CREATE_ACCESS_SERVICE_INTERFACE,
    FETCH_ACCESS_SERVICE_INTERFACE
  ],
  providers: [
    { provide: ACCESS_REPOSITORY, useClass: AccessRepository },
    { provide: CREATE_ACCESS_SERVICE_INTERFACE, useClass: CreateAccessService },
    { provide: FETCH_ACCESS_SERVICE_INTERFACE, useClass: FetchAccessService }
  ],
})
export class AccessModule { }