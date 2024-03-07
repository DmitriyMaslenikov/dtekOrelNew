import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DomioCrudService } from '../common/domioCrudService';
import { Indication } from './indication.entity';

@Injectable()
export class IndicationsService extends DomioCrudService<Indication> {
  constructor(@InjectRepository(Indication) repo) {
    super(repo);
  }
}
