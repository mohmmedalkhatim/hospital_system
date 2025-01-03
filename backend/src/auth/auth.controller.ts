import { Body, Controller, Get, Post, Req, SetMetadata } from '@nestjs/common';
import { User } from 'prisma/prisma-client';
import authService from './auth.service';
import { JwtService } from '@nestjs/jwt';

export const is_public = "true"
const Public = () => SetMetadata(is_public, true)
@Controller("auth")
class AuthControl {
    constructor(private service: authService) { }

    @Get("profile")
    async profile(@Req() req) {
        return req["user"]
    }
    @Public()
    @Post("sign_up")
    async sign_up(@Body() user: User) {
        return this.service.sign_up(user)
    }
    @Public()
    @Post("sign_in")
    async sign_in(@Body("Email") email: User["Email"], @Body("Password") password: User["Password"]) {
        this.service.sign_in({ email, password })
    }
    @Post("profile_update")
    async update(@Body() data) {
        const updated = { ...data }

    }
} export default AuthControl