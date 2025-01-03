import {Module} from '@nestjs/common';
import PrimsaSerivce from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import AuthGuard from './auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';



@Module({
    providers:[{provide:APP_GUARD,useClass:AuthGuard}],
    controllers:[],
    imports:[AuthModule,JwtModule.register({secret:env.secret})]
})
export class AppModule{}