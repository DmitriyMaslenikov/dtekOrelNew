import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Month } from './month.entity';
export declare class MonthsService extends TypeOrmCrudService<Month> {
    constructor(repo: any);
}
