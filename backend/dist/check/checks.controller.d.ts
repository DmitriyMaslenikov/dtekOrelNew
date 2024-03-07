import { CrudController } from '@nestjsx/crud';
import { Check } from './check.entity';
import { ChecksService } from './checks.service';
export declare class ChecksController implements CrudController<Check> {
    service: ChecksService;
    constructor(service: ChecksService);
}
