import { Module } from '@nestjs/common';
import { AdmieService } from './admie.service';
import { AdmieController } from './admie.controller';

@Module({
  controllers: [AdmieController],
  providers: [AdmieService]
})
export class AdmieModule {}
