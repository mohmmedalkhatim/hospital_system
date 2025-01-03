import { Module } from '@nestjs/common';
import authService from './auth.service';
import AuthControl from './auth.controller';
import {JwtModule} from '@nestjs/jwt'
import { env } from 'process';
import PrimsaSerivce from 'src/prisma/prisma.service';

@Module({
    providers: [authService,PrimsaSerivce],
    controllers: [AuthControl],
    imports: [JwtModule.register({secret:env.secret})]
})
class AuthModule {}


export { AuthModule };