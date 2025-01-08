import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/prisma-client';


@Injectable()
class PrismaService extends PrismaClient implements OnModuleInit{
    onModuleInit() {
       return this.$connect()
    }
    
}export default PrismaService