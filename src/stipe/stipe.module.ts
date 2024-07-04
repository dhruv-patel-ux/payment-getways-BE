/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { StipeService } from './stipe.service';
import { StipeController } from './stipe.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [StipeController],
  providers: [StipeService, PrismaService],
})
export class StipeModule {}
