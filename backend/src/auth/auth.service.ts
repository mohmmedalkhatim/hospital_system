import { Body, Injectable, Inject, Scope, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from 'prisma/prisma-client'
import PrimsaSerivce from "src/prisma/prisma.service";
import { REQUEST, } from '@nestjs/core'
import { Request } from "express";
import * as bcrypt from 'bcrypt'

@Injectable({ scope: Scope.REQUEST })
class authService {
    constructor(private jwt: JwtService, private prisma: PrimsaSerivce, @Inject(REQUEST) private req: Request) { }
    async sign_up(data: User) {
        let user: User | Error;
        if (data) {
            try {
                user = await this.prisma.user.create({
                    data: {
                        ...data,
                        Password: await bcrypt.hash(data.Password, 10)
                    }
                })
            } catch {
                if (user instanceof Error) {
                    throw new Error(user.message)
                }
            }
            const token = this.jwt.signAsync(user)
            this.req["user"] = user
            return { accessToken: token }
        }
    }
    async sign_in(data: { email: string, password: string }) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    Email: data.email
                }
            })
            if (!user) {
                throw new HttpException("the email or the password is incurract", HttpStatus.BAD_REQUEST)
            }
            if (bcrypt.compare(data.password, user.Password)) {
                const token = this.jwt.signAsync(user)
                this.req["user"] = user
                return { accessToken: token }
            }
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message)
            }
        }

    }
    async update(){

    }

} export default authService