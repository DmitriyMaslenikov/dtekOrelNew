import { CrudController } from '@nestjsx/crud';
import { Indication } from './indication.entity';
import { IndicationsService } from './indications.service';
export declare class IndicationsController implements CrudController<Indication> {
    service: IndicationsService;
    constructor(service: IndicationsService);
}
