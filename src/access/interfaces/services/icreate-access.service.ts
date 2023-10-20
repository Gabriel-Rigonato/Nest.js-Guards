import { AccessEntity } from "src/core/entities/access.entity";

export const CREATE_ACCESS_SERVICE_INTERFACE = 'CREATE_ACCESS_SERVICE_INTERFACE';

export interface ICreateAccessService {
   create: (accessEntity: AccessEntity, user_id: number) => Promise<AccessEntity>;
}