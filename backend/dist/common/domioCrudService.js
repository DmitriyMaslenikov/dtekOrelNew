"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomioCrudService = void 0;
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const class_transformer_1 = require("class-transformer");
class DomioCrudService extends crud_typeorm_1.TypeOrmCrudService {
    async updateOne(req, dto) {
        const { allowParamsOverride, returnShallow } = req.options.routes.updateOneBase;
        const paramsFilters = this.getParamFilters(req.parsed);
        const found = await this.getOneOrFail(req, returnShallow);
        const toСhange = !allowParamsOverride
            ? { ...dto, ...paramsFilters, ...req.parsed.authPersist }
            : { ...dto, ...req.parsed.authPersist };
        const updated = await this.repo.save((0, class_transformer_1.plainToClassFromExist)(found, toСhange));
        if (returnShallow) {
            return updated;
        }
        else {
            req.parsed.paramsFilter.forEach((filter) => {
                filter.value = updated[filter.field];
            });
            return await this.getOneOrFail(req);
        }
    }
}
exports.DomioCrudService = DomioCrudService;
//# sourceMappingURL=domioCrudService.js.map