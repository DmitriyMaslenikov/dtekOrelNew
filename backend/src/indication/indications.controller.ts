import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Indication } from './indication.entity';
import { IndicationsService } from './indications.service';

@Crud({
  model: {
    type: Indication,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('indications')
export class IndicationsController implements CrudController<Indication> {
  constructor(public service: IndicationsService) {}
}
