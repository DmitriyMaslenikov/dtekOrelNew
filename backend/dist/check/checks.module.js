"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const check_entity_1 = require("./check.entity");
const checks_service_1 = require("./checks.service");
const checks_controller_1 = require("./checks.controller");
let ChecksModule = class ChecksModule {
};
ChecksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([check_entity_1.Check])],
        providers: [checks_service_1.ChecksService],
        exports: [checks_service_1.ChecksService],
        controllers: [checks_controller_1.ChecksController],
    })
], ChecksModule);
exports.ChecksModule = ChecksModule;
//# sourceMappingURL=checks.module.js.map