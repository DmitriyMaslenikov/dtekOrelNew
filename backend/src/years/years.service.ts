import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Year } from './year.entity';

@Injectable()
export class YearsService extends TypeOrmCrudService<Year> {
  constructor(@InjectRepository(Year) repo) {
    super(repo);
  }
}
