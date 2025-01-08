import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmieDto } from './create-admie.dto';

export class UpdateAdmieDto extends PartialType(CreateAdmieDto) {}
