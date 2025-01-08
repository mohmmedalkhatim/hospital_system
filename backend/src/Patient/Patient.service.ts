import { Injectable } from '@nestjs/common';
import { Patient } from '@prisma/client';
import PrismaService from 'src/prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePatientDto): Promise<Patient> {
    return this.prisma.patient.create({ data });
  }

  async findAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  async findOne(id: string): Promise<Patient> {
    return this.prisma.patient.findUnique({ where: { Id: id } });
  }

  async update(id: string, data: UpdatePatientDto): Promise<Patient> {
    return this.prisma.patient.update({
      where: { Id: id },
      data,
    });
  }

  async remove(id: string): Promise<Patient> {
    return this.prisma.patient.delete({ where: { Id: id } });
  }
}
