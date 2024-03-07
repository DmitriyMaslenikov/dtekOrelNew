import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CrudRequest } from '@nestjsx/crud';

import { plainToClassFromExist } from 'class-transformer';
import { DeepPartial } from 'typeorm';

export class DomioCrudService<T> extends TypeOrmCrudService<T> {
  /**
   * Update one
   * @param req
   * @param dto
   */
  public async updateOne(req: CrudRequest, dto: DeepPartial<T>): Promise<T> {
    const { allowParamsOverride, returnShallow } =
      req.options.routes.updateOneBase;
    const paramsFilters = this.getParamFilters(req.parsed);
    const found = await this.getOneOrFail(req, returnShallow);

    const toСhange = !allowParamsOverride
      ? { ...dto, ...paramsFilters, ...req.parsed.authPersist }
      : { ...dto, ...req.parsed.authPersist };
    const updated = await this.repo.save(
      plainToClassFromExist(
        found,
        toСhange,

        // req.parsed.classTransformOptions,
      ) as unknown as DeepPartial<T>,
    );

    if (returnShallow) {
      return updated;
    } else {
      req.parsed.paramsFilter.forEach((filter) => {
        filter.value = updated[filter.field];
      });

      return await this.getOneOrFail(req);
    }
  }
}