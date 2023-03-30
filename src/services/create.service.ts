import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

interface IRequest {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

@Injectable()
export default class CreateService {
  constructor(private readonly prisma: PrismaService) { }

  async create({name, email, password, isAdmin} : IRequest): Promise<any> {

    const hashedPassword = await bcrypt.hashSync(password, 10);
     
     const user = await this.prisma.user.create({
      data:{
        name: name,
        email: email,
        password: hashedPassword,
        isAdmin: isAdmin 
      }
     });
     return user;
  }
}

