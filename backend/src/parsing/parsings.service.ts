import { Injectable } from '@nestjs/common';
import { DataOrel } from './parsing.dtekOrel.interface';
import { DataMegan } from './parsing.dtekMegan.interface';
import { getDataDtek } from 'src/fuctions/getDataDtek';
import { getDataYasno } from '../fuctions/getDataYasno';

@Injectable()
export class ParsingsService {
  getData = (dataSupplier: string, company: string) => {
    // let res: Promise<DataOrel | DataMegan | string>;
    if (dataSupplier === 'Dtek') {
      return getDataDtek(company);
    } else if (dataSupplier === 'Yasno') {
      return getDataYasno(company);
    }
    return '';
  };
}
