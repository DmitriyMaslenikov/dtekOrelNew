import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { ParsingsService } from './parsings.service';
import { DataOrel } from './parsing.dtekOrel.interface';
import { DataMegan } from './parsing.dtekMegan.interface';
import { DataOrelYasno } from '../parsing/parsing.yasnoOrel.interface';

@Controller('parsings')
export class ParsingsController {
  constructor(private parsingsService: ParsingsService) {}

  @Get()
  async getData(
    @Req() request: Request,
  ): Promise<DataOrel | DataMegan | string | DataOrelYasno> {
    const company =
      typeof request.query.company === 'string' ? request.query.company : '';
    const dataSupplier =
      typeof request.query.dataSupplier === 'string'
        ? request.query.dataSupplier
        : '';

    return this.parsingsService.getData(dataSupplier, company);
  }
}
