import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Check } from './check.entity';
import { ChecksService } from './checks.service';

@Crud({
  model: {
    type: Check,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('checks')
export class ChecksController implements CrudController<Check> {
  constructor(public service: ChecksService) {}
}
