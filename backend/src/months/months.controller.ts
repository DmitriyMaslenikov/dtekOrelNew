import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Month } from './month.entity';
import { MonthsService } from './months.service';

@Crud({
  model: {
    type: Month,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('months')
export class MonthsController implements CrudController<Month> {
  constructor(public service: MonthsService) {}
}
