import { PROFILE } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDTO {

   @IsNotEmpty({ message: "O campo 'Email' é obrigatório." })
   email: string;

   @IsNotEmpty({ message: "O campo 'Senha' é obrigatório." })
   password: string;

   @IsOptional()
   name: string;

   @IsNotEmpty({ message: "O campo 'Perfil' é obrigatório." })
   @IsEnum(PROFILE)
   profile: PROFILE

   @IsNotEmpty({ message: "O campo 'Acesso' é obrigatório." })
   access: any;

}