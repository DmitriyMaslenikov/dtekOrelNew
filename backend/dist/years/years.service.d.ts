import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Year } from './year.entity';
export declare class YearsService extends TypeOrmCrudService<Year> {
    constructor(repo: any);
}
