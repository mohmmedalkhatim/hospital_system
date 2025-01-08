import { Injectable } from '@nestjs/common';
import { admie } from '@prisma/client';
import PrismaService from 'src/prisma/prisma.service';
import { CreateAdmieDto } from './dto/create-admie.dto';
import { UpdateAdmieDto } from './dto/update-admie.dto';

@Injectable()
export class AdmieService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAdmieDto): Promise<admie> {
    return this.prisma.admie.create({ data });
  }

  async findAll(): Promise<admie[]> {
    return this.prisma.admie.findMany();
  }

  async findOne(id: string): Promise<admie> {
    return this.prisma.admie.findUnique({ where: { ID: id } });
  }

  async update(id: string, data: UpdateAdmieDto): Promise<admie> {
    return this.prisma.admie.update({
      where: { ID: id },
      data,
    });
  }

  async remove(id: string): Promise<admie> {
    return this.prisma.admie.delete({ where: { ID: id } });
  }
}
