import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdmieService } from './admie.service';
import { CreateAdmieDto } from './dto/create-admie.dto';
import { UpdateAdmieDto } from './dto/update-admie.dto';

@Controller('admies')
export class AdmieController {
  constructor(private readonly admieService: AdmieService) {}

  @Post()
  create(@Body() createAdmieDto: CreateAdmieDto) {
    return this.admieService.create(createAdmieDto);
  }

  @Get()
  findAll() {
    return this.admieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.admieService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdmieDto: UpdateAdmieDto) {
    return this.admieService.update(id, updateAdmieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.admieService.remove(id);
  }
}
