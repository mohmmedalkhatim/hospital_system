import { Injectable } from '@nestjs/common';
import { Doctor } from '@prisma/client';

import PrismaService from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/updata-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDoctorDto): Promise<Doctor> {
    return this.prisma.doctor.create({ data });
  }

  async findAll(): Promise<Doctor[]> {
    return this.prisma.doctor.findMany();
  }

  async findOne(id: string): Promise<Doctor> {
    return this.prisma.doctor.findUnique({ where: { Id: id } });
  }

  async update(id: string, data: UpdateDoctorDto): Promise<Doctor> {
    return this.prisma.doctor.update({
      where: { Id: id },
      data,
    });
  }

  async remove(id: string): Promise<Doctor> {
    return this.prisma.doctor.delete({ where: { Id: id } });
  }
}
