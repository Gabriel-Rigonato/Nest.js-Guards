import { PROFILE, User } from "@prisma/client";

export class UserEntity implements User {
   id: number
   uuid: string
   email: string
   name: string | null
   password: string
   profile: PROFILE
}