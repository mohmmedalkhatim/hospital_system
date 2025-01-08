import { Injectable } from '@nestjs/common';
import { Record } from '@prisma/client';
import PrismaService from 'src/prisma/prisma.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export class RecordService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRecordDto): Promise<Record> {
    return this.prisma.record.create({ data });
  }

  async findAll(): Promise<Record[]> {
    return this.prisma.record.findMany({
      include: { Patient: true },
    });
  }

  async findOne(id: string): Promise<Record> {
    return this.prisma.record.findUnique({
      where: { Id: id },
      include: { Patient: true },
    });
  }

  async update(id: string, data: UpdateRecordDto): Promise<Record> {
    return this.prisma.record.update({
      where: { Id: id },
      data,
    });
  }

  async remove(id: string): Promise<Record> {
    return this.prisma.record.delete({ where: { Id: id } });
  }
}
