import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { DeepPartial } from 'typeorm';
export declare class DomioCrudService<T> extends TypeOrmCrudService<T> {
    updateOne(req: CrudRequest, dto: DeepPartial<T>): Promise<T>;
}
