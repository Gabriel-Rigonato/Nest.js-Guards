import { AccessEntity } from "src/core/entities/access.entity";

export const ACCESS_REPOSITORY = 'ACCESS_REPOSITORY';

export interface IAccessRepository {
   create: (accessEntity: AccessEntity) => Promise<AccessEntity>;

   find: (user_id: number, end_point: string) => Promise<any>;
}