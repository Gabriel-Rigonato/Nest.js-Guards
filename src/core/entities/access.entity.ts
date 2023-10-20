import { Access, PROFILE } from "@prisma/client";

export class AccessEntity implements Access {
   id: number
   uuid: string
   end_point: string
   method: string
   isTrue: boolean
   user_id: number
}