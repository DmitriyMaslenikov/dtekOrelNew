import { CrudController } from '@nestjsx/crud';
import { Month } from './month.entity';
import { MonthsService } from './months.service';
export declare class MonthsController implements CrudController<Month> {
    service: MonthsService;
    constructor(service: MonthsService);
}
