import { Request } from 'express';
import { ParsingsService } from './parsings.service';
import { DataOrel } from './parsing.dtekOrel.interface';
import { DataMegan } from './parsing.dtekMegan.interface';
import { DataOrelYasno } from '../parsing/parsing.yasnoOrel.interface';
export declare class ParsingsController {
    private parsingsService;
    constructor(parsingsService: ParsingsService);
    getData(request: Request): Promise<DataOrel | DataMegan | string | DataOrelYasno>;
}
