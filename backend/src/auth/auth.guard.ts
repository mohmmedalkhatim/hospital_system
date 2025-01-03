import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { is_public } from './auth.controller';



@Injectable()
class AuthGuard implements CanActivate{
    constructor(private jwt:JwtService,private reflector:Reflector) { }
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const is_Public = this.reflector.getAllAndOverride(is_public,[context.getHandler(),context.getClass()]);
        if(is_Public){
            return true
        } 
        const req = context.switchToHttp().getRequest();
        const payload = this.extractTokenFromHeader(req);
        req["user"] = payload;
        if(payload){
            return true
        }
        throw new UnauthorizedException()
    }
    
    extractTokenFromHeader(req:Request){
        const [type ,token] = req.headers.authorization.split(" ");
        if(type ==="Bearar" || token){
            return this.jwt.verifyAsync(token)
        }else{
            throw new UnauthorizedException()
        }
    }

} export default AuthGuard
