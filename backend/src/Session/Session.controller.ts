import { Controller, Get } from "@nestjs/common";
import {Param} from '@nestjs/common'
import SessionService from "./Session.service";
import PrimsaSerivce from "src/prisma/prisma.service";
import { Prisma } from "prisma/prisma-client";



@Controller("/Session")
class Session {
    constructor(prisma:PrimsaSerivce){}

    @Get("")
    one(@Param("id") id:String,){
        Prisma.
    }
    
} export default Session;