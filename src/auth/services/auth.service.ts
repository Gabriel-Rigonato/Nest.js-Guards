import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import 'dotenv';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationDTO } from 'src/auth/dtos/authentication.dto';

@Injectable()
export default class AuthService {

    constructor(
        private readonly prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async auth(authenticationDTO: AuthenticationDTO): Promise<any> {

        const userExists = await this.prisma.user.findFirst({
            where: {
                email: authenticationDTO.email
            }
        })

        const isValidPassword = await bcrypt.compare(authenticationDTO.password, userExists.password);

        if (userExists && isValidPassword) {

            const payload = { email: userExists.email, username: userExists.name, sub: userExists.id };

            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        } else {
            throw new Error('User or Password was incorrect.')
        }

    }
}