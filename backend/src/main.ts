import {NestFactory,NestApplication} from '@nestjs/core'
import { AppModule } from './App.module'
import AuthGuard from './auth/auth.guard';

async function init(){
    const app = await NestFactory.create<NestApplication>(AppModule);
    app.enableCors()
    app.listen(3000)
}

init();

