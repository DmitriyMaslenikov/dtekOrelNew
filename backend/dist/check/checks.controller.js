"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecksController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const check_entity_1 = require("./check.entity");
const checks_service_1 = require("./checks.service");
let ChecksController = class ChecksController {
    constructor(service) {
        this.service = service;
    }
};
ChecksController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: check_entity_1.Check,
        },
        params: {
            id: {
                field: 'id',
                type: 'uuid',
                primary: true,
            },
        },
    }),
    (0, common_1.Controller)('checks'),
    __metadata("design:paramtypes", [checks_service_1.ChecksService])
], ChecksController);
exports.ChecksController = ChecksController;
//# sourceMappingURL=checks.controller.js.map