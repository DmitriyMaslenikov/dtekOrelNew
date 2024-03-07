import { CrudController } from '@nestjsx/crud';
import { Year } from './year.entity';
import { YearsService } from './years.service';
export declare class YearsController implements CrudController<Year> {
    service: YearsService;
    constructor(service: YearsService);
}
