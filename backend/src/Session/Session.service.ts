import { Injectable } from '@nestjs/common';
import { Session } from '@prisma/client';
import PrismaService from 'src/prisma/prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSessionDto): Promise<Session> {
    return this.prisma.session.create({ data });
  }

  async findAll(): Promise<Session[]> {
    return this.prisma.session.findMany({
      include: { Doctor: true, Patient: true },
    });
  }

  async findOne(id: string): Promise<Session> {
    return this.prisma.session.findUnique({
      where: { Id: id },
      include: { Doctor: true, Patient: true },
    });
  }

  async update(id: string, data: UpdateSessionDto): Promise<Session> {
    return this.prisma.session.update({
      where: { Id: id },
      data,
    });
  }

  async remove(id: string): Promise<Session> {
    return this.prisma.session.delete({ where: { Id: id } });
  }
}
