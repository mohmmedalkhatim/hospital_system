import { Module } from '@nestjs/common'
import PrimsaSerivce from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import AuthGuard from './auth/auth.guard'
import { JwtModule } from '@nestjs/jwt'
import { env } from 'process'
import { DoctorModule } from './Doctor/Doctor.module'
import { RecordModule } from './record/record.module';
import { PatientModule } from './patient/patient.module';
import { SessionModule } from './session/session.module';

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
  controllers: [],
  imports: [AuthModule,DoctorModule, JwtModule.register({ secret: env.secret }), RecordModule, PatientModule, SessionModule, ],
})
export class AppModule {}
