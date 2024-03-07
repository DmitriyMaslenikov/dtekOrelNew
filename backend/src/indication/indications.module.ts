import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Indication } from './indication.entity';
import { IndicationsService } from './indications.service';
import { IndicationsController } from './indications.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Indication])],
  providers: [IndicationsService],
  exports: [IndicationsService],
  controllers: [IndicationsController],
})
export class IndicationsModule {}
