import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import 'dotenv';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface IRequest {
    email: string;
    password: string;
}

@Injectable()
export default class LoginService {

    constructor(
        private readonly prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async login({ email, password }: IRequest): Promise<any> {

        const userExists = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        })

        const isValid = await bcrypt.compare(password, userExists.password);

        if (userExists && isValid) {

            const payload = { email: userExists.email, username: userExists.name, sub: userExists.id, isAdmin: userExists?.isAdmin };

            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        } else { 
            throw new Error ('User or Password was incorrect.')
        }

    }
}