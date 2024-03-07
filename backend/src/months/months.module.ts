import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MonthsController } from './months.controller';
import { MonthsService } from './months.service';
import { Month } from './month.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Month])],
  providers: [MonthsService],
  exports: [MonthsService],
  controllers: [MonthsController],
})
export class MonthsModule {}
