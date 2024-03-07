"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const indication_entity_1 = require("./indication.entity");
const indications_service_1 = require("./indications.service");
const indications_controller_1 = require("./indications.controller");
let IndicationsModule = class IndicationsModule {
};
IndicationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([indication_entity_1.Indication])],
        providers: [indications_service_1.IndicationsService],
        exports: [indications_service_1.IndicationsService],
        controllers: [indications_controller_1.IndicationsController],
    })
], IndicationsModule);
exports.IndicationsModule = IndicationsModule;
//# sourceMappingURL=indications.module.js.map