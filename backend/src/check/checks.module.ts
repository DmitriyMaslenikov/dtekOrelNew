import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Check } from './check.entity';
import { ChecksService } from './checks.service';
import { ChecksController } from './checks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Check])],
  providers: [ChecksService ],
  exports: [ChecksService ],
  controllers: [ChecksController],
})
export class ChecksModule {}
