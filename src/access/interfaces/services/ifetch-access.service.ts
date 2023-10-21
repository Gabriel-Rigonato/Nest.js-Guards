import { AccessEntity } from "src/core/entities/access.entity";

export const FETCH_ACCESS_SERVICE_INTERFACE = 'FETCH_ACCESS_SERVICE_INTERFACE';

export interface IFetchAccessService {

   find: (user_id: number, end_point: string, method: string) => Promise<any>;
}