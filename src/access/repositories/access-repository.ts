import { Injectable, } from '@nestjs/common';
import { AccessEntity } from 'src/core/entities/access.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { IAccessRepository } from '../interfaces/repositories/iaccess-repository';


@Injectable()
export class AccessRepository implements IAccessRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create(accessEntity: AccessEntity): Promise<AccessEntity> {
    const access = await this.prisma.access.create({
      data: {
        ...accessEntity
      }
    });

    return access;
  }

  async find(user_id: number, end_point: string): Promise<any> {
    const access = await this.prisma.access.findFirst({
      where: {
        user_id: user_id,
        end_point: {
          startsWith: end_point
        }
      }
    })

    return access
  }
}