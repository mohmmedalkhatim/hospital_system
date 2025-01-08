import { Module } from '@nestjs/common';
import { DoctorController } from './Doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
  imports: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}