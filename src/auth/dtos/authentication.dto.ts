import { IsNotEmpty } from 'class-validator';

export class AuthenticationDTO {

  @IsNotEmpty({ message: "O campo 'Email' é obrigatório." })
  email: string;

  @IsNotEmpty({ message: "O campo 'Senha' é obrigatório." })
  password: string;
}
