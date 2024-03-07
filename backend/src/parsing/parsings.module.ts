import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// import { Check } from './parsing.entity';
import { ParsingsService } from './parsings.service';
import { ParsingsController } from './parsings.controller';

@Module({
  imports: [],
  providers: [ParsingsService],
  exports: [ParsingsService],
  controllers: [ParsingsController],
})
export class ParsingsModule {}
