import { Injectable, Inject } from '@nestjs/common';
import { ACCESS_REPOSITORY, IAccessRepository } from '../interfaces/repositories/iaccess-repository';
import { AccessEntity } from 'src/core/entities/access.entity';
import { IFetchAccessService } from '../interfaces/services/ifetch-access.service';

@Injectable()
export class FetchAccessService implements IFetchAccessService {

  constructor(@Inject(ACCESS_REPOSITORY) private readonly iAccessRepository: IAccessRepository) { }

  async find(user_id: number, end_point: string): Promise<any> {
    const access = await this.iAccessRepository.find(user_id, end_point);
    return access;
  }
}