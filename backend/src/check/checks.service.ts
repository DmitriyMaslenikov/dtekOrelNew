import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DomioCrudService } from '../common/domioCrudService';
import { Check } from './check.entity';

@Injectable()
export class ChecksService extends DomioCrudService<Check> {
  constructor(@InjectRepository(Check) repo) {
    super(repo);
  }
}
