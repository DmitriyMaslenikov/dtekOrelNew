"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const months_controller_1 = require("./months.controller");
const months_service_1 = require("./months.service");
const month_entity_1 = require("./month.entity");
let MonthsModule = class MonthsModule {
};
MonthsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([month_entity_1.Month])],
        providers: [months_service_1.MonthsService],
        exports: [months_service_1.MonthsService],
        controllers: [months_controller_1.MonthsController],
    })
], MonthsModule);
exports.MonthsModule = MonthsModule;
//# sourceMappingURL=months.module.js.map