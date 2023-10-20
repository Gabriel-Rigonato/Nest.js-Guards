import { Injectable, Inject } from '@nestjs/common';
import { ACCESS_REPOSITORY, IAccessRepository } from '../interfaces/repositories/iaccess-repository';
import { AccessEntity } from 'src/core/entities/access.entity';

@Injectable()
export class CreateAccessService {

  constructor(@Inject(ACCESS_REPOSITORY) private readonly iAccessRepository: IAccessRepository) { }

  async create(accessData: any, user_id: number): Promise<any> {

    const data = {
      ...new AccessEntity(),
      end_point: accessData.end_point,
      user_id: user_id,
      method: accessData.method,
      isTrue: accessData.isTrue,
    }
    const access = await this.iAccessRepository.create(data);
    return access;
  }
}