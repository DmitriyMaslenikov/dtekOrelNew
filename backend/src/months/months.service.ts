import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Month } from './month.entity';

@Injectable()
export class MonthsService extends TypeOrmCrudService<Month> {
  constructor(@InjectRepository(Month) repo) {
    super(repo);
  }
}
